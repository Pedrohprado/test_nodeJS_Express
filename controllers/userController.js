const asyncHandler = require('express-async-handler');

//@desc Register a user
//@route POST /api/users/register
//@acess public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Register the user' });
});

//@desc Login a user
//@route POST /api/users/login
//@acess public
const loginUser = asyncHandler(async  (req, res) => {
    res.json({ message: 'Login user' });
});

//@desc Current user info
//@route GET /api/users/current
//@acess private
const currentUser = asyncHandler(async  (req, res) => {
    res.json({ message: 'Current user information' });
});


module.exports = { registerUser, loginUser, currentUser };