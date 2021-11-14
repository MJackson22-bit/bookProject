import { Component } from '@angular/core';
import { Book } from './models/book';
import { bookDescriptionJson } from './_files/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book - Jack';
  bookListObject: Book[] = bookDescriptionJson;
  bookToFind: string = "";
  
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
}
