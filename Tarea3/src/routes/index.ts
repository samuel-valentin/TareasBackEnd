import { Router } from "express";
import upload from "../middlewares/uploads";
import path from "path";
import fs from "fs";
import { HTTP_STATUS_CODE } from "../types/http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  res.send("API Works");
});

router.post('/uploads', upload.array('docs'), (req, res) => {
  const files = req.files as Express.Multer.File[];
  console.log('Files are', req.files);

  if(files && files.length > 0) {
    // res.send('File uploaded');
    res.status(HTTP_STATUS_CODE.SUCCESS).json({files});
  }else{
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).send('Archivo no soportados')
  }
});


router.get('/download', (req, res) => {
  const fileName = req.query.file as string;
  const filePath = path.join(__dirname, '..', '..', 'documents', fileName);

  if (fs.existsSync(filePath))
    res.download(filePath);
  else
    res.status(HTTP_STATUS_CODE.NOT_FOUND).send('File not found');
});

export default router;