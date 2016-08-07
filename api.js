import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { StringDecoder } from 'string_decoder'
import streamToPromise from 'stream-to-promise'
import svg2ttf from 'svg2ttf'
import ttf2eot from 'ttf2eot'
import ttf2woff from 'ttf2woff'
import ttf2woff2 from 'ttf2woff2'
import svgicons2svgfont from 'svgicons2svgfont'
import call_pipe from '0x00-pl--svg-pack-to-ttf'



export default function (api) {

  // file upload
  api.post('/icons', (req, res, next) => {

    if(req.busboy) {
      req.busboy.on('file', (fieldname, file, filename) => {
        console.log('File [' + fieldname + ']: filename: ' + filename)

        let saveOn = path.resolve(__dirname, 'uploads', path.basename(filename))

        file.pipe(fs.createWriteStream(saveOn))

      })

      req.busboy.on('finish', _ => {
        console.log('Done')
        let svg_path = path.resolve(__dirname, 'uploads')
        let ttf_file = path.resolve(__dirname, 'global_ttf', 'icon-pool.ttf')
        let json_file = path.resolve(__dirname, 'global_ttf', 'icon-pool.json')
        //call_cmd(svg_path, svg_file, ttf_file)
        res.status(204).end()
      })

      req.pipe(req.busboy)
    }

  })

  // fetch all icons

  api.get('/icons', (req, res, next) => {
    //res.status(200).end()
    //console.log(path.join(__dirname, 'uploads', '*.svg'))

    const IconsJsonFilePath = path.join(__dirname, 'icons.json')
    const svgFilePath = name => path.join(__dirname, 'uploads', `${name}.svg`)

    let { icons, prefix } = JSON.parse(fs.readFileSync(IconsJsonFilePath, 'utf-8'))

    /*

    let svgs = glob.sync(path.join(__dirname, 'uploads', '*.svg'))
      .map(n => fs.readFileSync(n, 'utf-8'))
    */

    let data = icons.map(n => {
      return Object.assign({}, n, {
        name: `${prefix}-${n.name}`,
        svg: fs.readFileSync(svgFilePath(n.name), 'utf-8')
      })
    })

    //console.log(data)

    res.send(data)
  })

  // fetch one

  api.get('/icons/:id', (req, res, next) => {
    res.status(200).end()
  })


  // update one

  api.patch('/icons/:id', (req, res, next) => {
    res.status(200).end()
  })

  // delete one

  api.delete('/icons/:id', (req, res, next) => {
    res.status(200).end()
  })


    function compile_ttf(cb){
        const svg_path = path.join(__dirname, 'uploads')
        const out_dir = path.join(__dirname, 'dist')
        const out_ttf = path.join(out_dir, 'out.ttf')
        const out_json = path.join(out_dir, 'out.json')

        call_pipe({
            svg_path: svg_path,
            out_ttf: out_ttf,
            out_json: out_json,
        }, cb)
    }
    // exports all icons to ttf and download ttf
    api.get('/export-ttf', (req, res, next) => {
        const out_ttf = path.join(__dirname, 'dist', 'out.ttf')
        compile_ttf(()=>{
            res.download(out_ttf)
        })
    })
    // exports all icons to ttf and download json
    api.get('/export-json', (req, res, next) => {
        const out_json = path.join(__dirname, 'dist', 'out.json')
        compile_ttf(()=>{
            res.download(out_json)
        })
    })

  // exports checked icons

  api.get('/export', (req, res, next) => {
    const IconsJsonFilePath = path.join(__dirname, 'icons.json')
    const svgFilePath = name => path.join(__dirname, 'uploads', `${name}.svg`)

    let { icons, prefix } = JSON.parse(fs.readFileSync(IconsJsonFilePath, 'utf-8'))

    let stream = svgicons2svgfont({
      fontName: 'iconfont'
    })

    class Font {
      constructor({ buffer, type }) {
        this.buffer = buffer
        this.type = type
      }
    }

    const findFont = type => list => {
      return list.find(n => n.type === type)
    }

    const id = x => x

    const svgFinder = findFont('svg')
    const ttfFinder = findFont('ttf')

    const fontAdapter = ({ seedCall, preBuf, doBuf, postBuf, type }) => fonts => {
      return new Promise((res, rej) => {
        try {
          fonts.push(new Font({
            buffer: new Buffer(
              postBuf(doBuf(preBuf(seedCall(fonts).buffer)))
            ),
            type: type
          }))
          res(fonts)
        } catch(e) {
          rej(e)
        }
      })
    }

    const svg = fonts => {
      return new Promise((res, rej) => {
        streamToPromise(stream)
          .then(buf => {
            fonts.push(new Font({ buffer: buf, type: 'svg' }))
            res(fonts)
          })
          .catch(rej)
      })
    }

    const ttf = fontAdapter({
      seedCall: svgFinder,
      preBuf: buf => buf.toString(),
      doBuf: svg2ttf,
      postBuf: buf => buf.buffer,
      type: 'ttf'
    })

    const eot = fontAdapter({
      seedCall: ttfFinder,
      preBuf: buf => new Uint8Array(buf),
      doBuf: ttf2eot,
      postBuf: buf => buf.buffer,
      type: 'eot'
    })

    const woff = fontAdapter({
      seedCall: ttfFinder,
      preBuf: buf => new Uint8Array(buf),
      doBuf: ttf2woff,
      postBuf: buf => buf.buffer,
      type: 'woff'
    })

    const woff2 = fontAdapter({
      seedCall: ttfFinder,
      preBuf: id,
      doBuf: ttf2woff2,
      postBuf: id,
      type: 'woff2'
    })


    Promise.resolve([])
      .then(svg)
      .then(ttf)
      .then(eot)
      .then(woff)
      .then(woff2)
      .then(fonts => {
        fonts.forEach(n => {
          fs.writeFileSync(
            path.join(__dirname, 'dist', `icons.${n.type}`),
            n.buffer,
            n.type === 'svg' ? 'utf8' : 'binary'
          )
        })
        return fonts
      })
      .then(fonts => res.send(fonts.map(n => n.buffer)))
      .catch(err => res.status(500).end(err))

    console.log(icons)

    let font = ''
    let decoder = new StringDecoder('utf8')
    let svgPath = path.join(__dirname, 'dist', 'icon.svg')
    let ttfPath = path.join(__dirname, 'dist', 'icon.ttf')

    icons.forEach(n => {
      let glyph = fs.createReadStream(svgFilePath(n.name))
      glyph.metadata = {
        unicode: [`\\u${n.code.toUpperCase()}`],
        name: `${prefix}-${n.name}`
      }
      stream.write(glyph)
    })


    stream.end()
  })
}
