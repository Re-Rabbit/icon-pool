import fs from 'fs'
import path from 'path'


export default function (api) {
  api.post('/icons', (req, res, next) => {

    if(req.busboy) {
      req.busboy.on('file', (fieldname, file, filename) => {
        console.log('File [' + fieldname + ']: filename: ' + filename)

        let saveOn = path.resolve(__dirname, 'uploads', path.basename(filename))
        file.pipe(fs.createWriteStream(saveOn))

      })
      
      req.busboy.on('finish', _ => {
        console.log('Done')
        res.status(204).end()
      })

      req.pipe(req.busboy)
    }
    
  })
}
