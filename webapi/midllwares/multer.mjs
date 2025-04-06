import path from 'node:path'
import fs from 'node:fs'
import multer from 'multer'
const __dirname=path.resolve()

const localStorage = multer.diskStorage({
    destination:function(req,file,callback){
        const uploadFolder = path.join(__dirname,'uploads')
        if(!fs.existsSync(uploadFolder)){
            fs.mkdirSync(uploadFolder)
        }
        callback(null,uploadFolder)
    },
    filename:function(req,file,callback){
        const path=file.fieldname+'-'+Date.now()+'.'+file.originalname.split('.')[file.originalname.split('.').length-1]
        callback(null,path)
    }
})

const upload=multer({storage:localStorage})

export const productCoverUpload = upload.single('cover')
export const avatarUpload = upload.single('avatar')

//const catalogUpload = upload.array('photos',10)

