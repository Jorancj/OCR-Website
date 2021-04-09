const express = require('express');
const app = express();
const multer = require('multer');
const Tesseract = require('tesseract.js');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage});

app.use('/static',express.static('static'))

app.use('/img',express.static('img'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.get('/aboutus',(req,res)=>{
    res.sendFile(__dirname +"/aboutus.html")
})



app.post('/api/upload',upload.single('uploadedImage'),(req,res)=>{
    console.log(req.file);

    try{
        Tesseract.recognize(
            'uploads/'+req.file.filename,
            'eng',
            {logger:m =>console.log(m)}
        ).then(({data:{text}})=>{
            console.log(text)

            return res.json(
                {
                    message:text
                }
            )
        })
    }catch(error){
        console.error(error)
    }
})

app.listen(4000, ()=>{
    console.log(`Listening at http://localhost:4000`)
})

