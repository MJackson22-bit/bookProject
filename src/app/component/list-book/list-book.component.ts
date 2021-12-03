import { Component, OnInit } from '@angular/core';
import { Veterinaria } from 'src/app/models/veterianaria';
import { BookService } from 'src/app/service/book.service';
import { Book } from '../../models/book'
import { bookDescriptionJson } from '../../_files/book';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  
  vetListObject?: Veterinaria[];
  bookListObject: Book[] = bookDescriptionJson;
  bookToFind: string = "";
  showNewBook = false;
  constructor(private vetService: BookService){}
  ngOnInit(): void {
    this.vetService.getVets().subscribe(data => this.vetListObject = data);
  }
  findBook() {
    this.bookListObject = bookDescriptionJson.filter(m => m.tittle.toLowerCase().includes(this.bookToFind.toLowerCase()));
  }
  resetListBook(){
    this.bookListObject = bookDescriptionJson;
    this.bookToFind = "";
  }
  deleteBook(book: Book){
    this.bookListObject = this.bookListObject.filter(m => m.id != book.id);
  }
  showAddBookForm(){
    this.showNewBook = !this.showNewBook;
  }
  addBook(book: Book){
    bookDescriptionJson.push(book);
    this.showAddBookForm();
  }
  
}
