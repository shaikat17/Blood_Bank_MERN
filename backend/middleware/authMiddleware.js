const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
            if(error) {
                res.status(401).send({
                    success: false,
                    error,
                    message: "Authentication Failed."
                })
            } else {
                req.body.userId = decode.id
                next()
            }
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: "Authentication Failed."
        })
    }
}