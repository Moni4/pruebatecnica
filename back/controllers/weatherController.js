const fs = require("fs")

const getData = async (req, res) => {
    const dataPath = './weather.json';
    try {
        fs.readFile(dataPath, 'utf8', (err,data) => {
            if (err) {
                console.log(err)
            }
        res.send(JSON.parse(data));
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getData
};