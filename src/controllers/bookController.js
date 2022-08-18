const { count } = require("console")
const BookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")


const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

// 1 List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another-
// first query will find the author_id for "Chetan Bhagat”. 
//Then next query will get the list of books with that author_id )
const getBooksData = async function (req, res) {
    let authors = await authorModel.find({ author_name : "Chetan Bhagat"})
    let bookid = await BookModel.find({ author_id  : { $eq : authors[0].author_id}})
    res.send( { msg  : bookid })  
}

// 2 find the author of “Two states” and update the book price to 100
//Send back the author_name and updated price in response. 
// ( This will also need 2  queries- 1st will be a findOneAndUpdate. 
//The second will be a find query aith author_id from previous query)

const findauthor = async function (req, res) {
    let bookprice = await BookModel.findOneAndUpdate(
        { name: "Two states"} , //condition
        {  price : 100 }, //update in data
        { new: true}  // , upsert: true
    )
     let updateprice = bookprice.price;
     let authorupdate = await authorModel.find({author_id: { $eq : bookprice.author_id}}).select({author_name : 1, _id : 0})
     res.send({msg : authorupdate , updateprice })
}

// 3rd Find the books which costs between 50-100(50,100 inclusive) 
//and respond back with the author names of respective books.. 

const findBooks = async function (req, res) {
    
let allBooks = await BookModel.find({   price : {$gte: 50, $lte: 100}})
let store = allBooks.map( x => x.author_id);
let  NewBooks = await authorModel.find({author_id : store}).select({author_name : 1, _id : 0})
res.send(NewBooks)

}






















//  let allBooks = await BookModel.find({   price : {$gte: 50, $lte: 100}}).select({author_id : 1 ,_id : 0 });
//  let output=[]
//  for(let i = 0; i<allBooks.length; i++){
//     let out = await authorModel.findOne(allBooks[i]).select({author_name : 1 , _id : 0});
//     output.push(out)
//  }
//   res.send({msg :allBooks , result : output})


// }
//  let author = await BookModel.find().select( { author_name : 1})
//     res.send({msg : author })    
// }






















// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({
//         author_name: "chetanBhagat } )
//    // console.log(allBooks)
//     if(allBooks.length > 0 )
//     res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })  
// }
    

// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     { author: "SK"} , //condition
//     { $set: data } //update in data
//  )
// let allBooks= await BookModel.findOneAndUpdate( 
//     { authorName: "ABC"} , //condition
//     { $set: data }, //update in data
//     { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//  )

//      res.send( { msg: allBooks})
// // }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


//creating author
module.exports.createAuthor = createAuthor
//creating for book 
module.exports.createBook = createBook

// getting books 
module.exports.getBooksData = getBooksData

//2nd 
module.exports.findauthor =findauthor

//3rd
module.exports.findBooks = findBooks



// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
