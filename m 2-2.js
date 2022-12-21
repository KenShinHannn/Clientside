const { template } = require('@babel/core')
//64130500083, Saharat, Kanuenghade

class Book {
    constructor(isbn, title = 'untitled', ebook = false){
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }
    addAuthor(fn,ln){
        this.authors.push({firstname:fn,lastname:ln})
        return this.authors.length
    }
    getFirstAuthor(){
        if(this.authors.length === 0){
            return undefined
        }
        return this.authors[0]
    }
    getCoAuthors(){
        if(this.authors.length === 0){
            return []
        }
        return this.authors.slice(1)
    }
    findAuthor(firstname,lastname){
        if(this.authors.length === 0){
            return undefined
        }
        return this.authors.find(e => e.firstname.toUpperCase() === firstname.toUpperCase() && e.lastname.toUpperCase() === lastname.toUpperCase())
    }
    hasEbook(){
        return this.ebook
    }
}
module.exports = Book

