const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

//middle ware
const  middlerware= async function (req, res) {
   res.send("congrats you are welcome in your profile wow all done smoothly ")
   
}
module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.middlerware=middlerware