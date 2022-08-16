const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
// 1 find function is used to find the data which setisfy the condition

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  { authorName : "vikram" , isPublished: true }  )
//     res.send({msg: allBooks})
// }
   
 // 2 count is used to count the number of documents and return number of documents in digit

 // const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  { authorName : "vikram" , isPublished: true }).count()
//     res.send({msg: allBooks})                                      //sales : 10
// }

// 3  or condition '

//iske liye contion ko sepreate curly brases me dalo fir sari condition ko aaray me dalo
// unke samne $or : lagao 
//yaha vo sara data dislya hoga jisme autohr vikram he or publish true he 
//di gai sari condition me se one condition true hone par data aa jayega
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  {
//       $or :  [ { authorName : "vikram"} , { isPublished: true} ] 
//          } ) //.count()
//     res.send({msg: allBooks})                                      //sales : 10
// }
   
// 4 select ko ham batate ki ye ye select karke display kar do baki ka rene do sab
//id will automatic display thorugh mongo db
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  {
//       $or :  [ { authorName : "vikram"} , { isPublished: true} ] 
//          } ).select( { bookName :1 , authorName : 1 , _id: 0} ) //using select method here
//     res.send({msg: allBooks})                       //_id : 0 likhne se prdefined id show nahi hogi              
// }


// 5 ascending order sorting the sales 
// 6 descending order 
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find().sort({sales : 1}) //ascending order
//                                              //sales -1 descending order ho jayega 
//     res.send({msg: allBooks})                                    
// } 

// 7 first books limit
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find().limit(1) //first book                          
//     res.send({msg: allBooks})                                    
// } 

// 8 high sel books 
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find().sort({sales :-1}).limit(3) //first book                          
//     res.send({msg: allBooks})                                    
// } //find search krega sort wala sort krega ki high sels walal do limit bata ra ki 3 data do

//9 selecting particualr starting books name or author name only 
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find().sort({sales :-1}).limit(3).select({bookName : 1, authorName : 1, _id: 0})                         
//     res.send({msg: allBooks})                                    
// } //find search krega sort wala sort krega ki high sels walal do limit bata ra ki 3 data do

//10 skip 
//10 first page ke 3 item skip karke aage ka dikhana
//starting ke 3 books skip hoke agle aayenge


// const getBooksData= async function (req, res) {
  
//     let allBooks= await BookModel.find().sort({sales :-1}).skip(3).limit(7).select({bookName : 1, authorName : 1, _id: 0})                         
//     res.send({msg: allBooks})                                  //skip( 3* (page-1)) 9 page chhupenge 10 walla aayega
// } //find search krega sort wala sort krega ki high sels walal do limit bata ra ki 3 data do

//11 page ka use user se input
// const getBooksData= async function (req, res) {
//     let page =  req.query.page //3 bheja to andr wale 3 se guna or - 1 hoga 5th wala page show hoga
//      let allBooks= await BookModel.find().sort({sales :-1}).skip(2 *(page-2)).limit(7).select({bookName : 1, authorName : 1, _id: 0})                         
//      res.send({msg: allBooks})                             //skip( 3* (page-1)) 9 page chhupenge 10 walla aayega
//  } //find search krega sort wala sort krega ki high sels walal do limit bata ra ki 3 data do
 
//12 equal to 
// const getBooksData= async function (req, res) {
   
//      let allBooks= await BookModel.find({ authorName : { $eq : "vikram"}})                         
//      res.send({msg: allBooks})      
//  } 
  
 // 13 sales jayad ho greter than 10 vo aayegi 

//  const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find({ sales : { $gt : 10}})                         
//     res.send({msg: allBooks})      
// } 

// 14 less then sales 
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find({ sales : { $lt : 10}})                         
    res.send({msg: allBooks})                //$lt is used for less then
}                                            //$lte less then equal
                                             //$gte greater than equal
                                             //$ne not equal to 
                                             //{ $in in the range:[10,17,58]} 
                                             //{ $nin not in the range : [10,17,58]} ye no wale nahi aayenge
                                             
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData