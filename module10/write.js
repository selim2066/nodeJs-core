const { error } = require("console")

const fs = require("fs")

const content1 = "this is asynchronous write file"

fs.writeFile('./module10/output/testAsyc.txt',content1, (error)=>{
  if(error){
    console.log(error.message)
  }else{
    console.log("file written asynchronously")
  }
})