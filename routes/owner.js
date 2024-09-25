const express = require('express');
const {
    getOwners,
    createOwner,
    getOwner,
    updateOwner,
    partialupdateOwner,
    deleteOwner,
    logInOwner,
} = require('../controllers/owner');
const verifyToken = require('../middleware/tokenHandler');

const router = express.Router();

router.get('/', getOwners);

router.post('/', createOwner);

router.get('/detail', verifyToken, getOwner);

router.put('/', verifyToken, updateOwner);

router.patch('/', verifyToken, partialupdateOwner);

router.delete('/', verifyToken, deleteOwner);

router.post('/login', logInOwner);

module.exports = router;