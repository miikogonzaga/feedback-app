module.exports = (req, res, next) => {
    // Check if logged in
    if (!req.user) {
        return res.status(401).send({ error: 'Please login' })
    }

    next();
}