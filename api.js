import fs from 'fs'
import path from 'path'
import call_cmd from '0x00-pl--avg-pack-to-ttf'


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
              call_cmd(svg_path, svg_file, ttf_file)
              res.status(204).end()
          })

          req.pipe(req.busboy)
      }
      
  })

    // fetch all icons

    api.get('/icons', (req, res, next) => {
        res.status(200).end()
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


    // exports checked icons
    
    api.get('/icons/export', (req, res, next) => {
        res.status(200).end()
    })
}
