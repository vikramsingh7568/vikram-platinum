//: prints the current date
 function printDate() {
    const now =new Date()
    
    console.log("the current date is :",now.getDate())
   printMonth()
}
//: prints the current month
 function printMonth(){
    const now = new Date()
     console.log("the current Month is:",now.getMonth()+1)
         
     getBatchInfo()
    }
 //print the batch info  
 function getBatchInfo(){
    console.log("Batch plutonium,3rd week,17th day, the topic being taught today is nodejs module system")
 }

 module.exports.printDate = printDate
