//@desc Get all contacts
//@route GET /api/contacts
//@acess public
const getContacts = async (req, res) => {
    try {
        res.status(200).json({ message: 'Get all contacts' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc create a new contacts
//@route POST /api/contacts
//@acess public
const createContact = async (req, res) => {
    try {
        res.status(201).json({ message: 'Create a new contact' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc  Get contact
//@route GET /api/contacts/:id
//@acess public
const getContact = async (req, res) => {
    try {
        res.status(200).json({ message: `Get contact for ${req.params.id}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@acess public
const updateContact = async (req, res) => {
    try {
        res.status(200).json({ message: `Update contact for ${req.params.id}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@acess public
const deleteContact = async (req, res) => {
    try {
        res.status(200).json({ message: `Delete contact for ${req.params.id}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };