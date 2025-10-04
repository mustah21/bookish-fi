const express = require('express');
const router = express.Router();

const {
    getAllImages,
    createImage,
    getImageById,
    updateImage,
    deleteImage
} = require('../controllers/imagesControllers')

// GET /images
router.get('/:bookId', getAllImages);

// POST /images
router.post('/:bookId', createImage);

// GET /images/:imageId
router.get('/:bookId/:imageId', getImageById);

// PUT /images/:imageId
router.put('/:bookId/:imageId', updateImage);

// DELETE /images/:imageId

router.delete('/:bookId/:imageId', deleteImage);

module.exports = router;