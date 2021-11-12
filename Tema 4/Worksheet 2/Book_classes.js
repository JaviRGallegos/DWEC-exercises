class Book{
    constructor(datos){
        this.title = datos.title;
        this.genre = datos.genre;
        this.author = datos.author;
        this.read = datos.read;
        this.read_date = datos.read_date;
    }
}

class Booklist extends Book{
    constructor(){
        this.read = 0;
        this.not_read = 0;
        this.next_to_read = next_to_read;
        this.current_being_read = current_being_read;
        this.last_read = last_read;
        this.books = [];
    }
    add(libro){
        return this.books.push(libro);
    }

    verify(){
        for (i = 0; i < this.books.length; i++){
            if (this.books[i].read == true){
                this.read += 1;
            }
            else{
                this.not_read += 1;
            }
        }
    }

}

