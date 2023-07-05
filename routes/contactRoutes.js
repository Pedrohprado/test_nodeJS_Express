const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler')
const {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
} = require('../controllers/contactController');

router.use(validateToken);

//Verificando todos os contatos 
//Criando um novo contato
router.route('/').get(getContacts).post(createContact);

//Get one contact
//Atualizando um contato
//Deletando um contato
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;