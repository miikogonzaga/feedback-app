module.exports = (req, res, next) => {
    // Check for user credits
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Add more Credits' })
    }

    next();
}