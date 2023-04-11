const checkKey = (req, res, next) => {
    const { key } = req.params;

    if (key === '123456') {
        next();
    }
    else {
        res.status(500).json({ error: "Wrong Key" })
    }
};

module.exports  = {
    checkKey
};