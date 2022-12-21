const { template } = require('@babel/core')
//64130500083,Saharat Kanuenghade
class BookMark {
  constructor (isbn, totalPages=0){
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }
addBookMark(pageNumber){
  if(!(pageNumber < 1 || pageNumber > this.totalPages) ){
    this.bookMarks.push(pageNumber)
  }
  return this.bookMarks.length
}
goToFirstBookMark(){
  if(this.bookMarks.length === 0){
    return undefined
  }
  return this.bookMarks[0]
}
goToLastBookMark(){
  if(this.bookMarks.length === 0){
    return undefined
  }
  return this.bookMarks[this.bookMarks.length-1]
}
removeBookMark = (pageNumber) => {
  if(this.bookMarks.length === 0){
    return undefined
  }
  if(this.bookMarks.find(e => e === pageNumber)){
    return this.bookMarks.shift()

  }
}
getBookMarks(){
    return this.bookMarks
  }
}

module.exports = BookMark

