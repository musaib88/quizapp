const path = require('path');
const multer = require('multer');

const uploadImg = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage }).single('file'); // Use 'file' as the fieldname

  upload(req, res, function (err) {
    if (err) {
      console.error('Error uploading image:', err);
      return res.status(500).json({ error: 'Image upload failed' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    req.body.photourl = `http://localhost:5000/images/${req.file.filename}`;
    next();
  });
};

module.exports = uploadImg;
