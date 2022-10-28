exports.createUser = async (req, res) => {
    const {fullName, email, password, phoneNumber} = req.body;
    const isNewUser = await User.isThisEmailUnique(email);
    if(!isNewUser) return res.json({suces:false, message: 'This email is already in use, try signing in',})
    const user = await User({
        fullName,
        email,
        password,
        phoneNumber,
    });
    await user.save();
    res.json(user);
};