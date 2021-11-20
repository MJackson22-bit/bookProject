import { Component, OnInit } from '@angular/core';
import { bookDescriptionJson } from '../../_files/book';
import { Book } from '../../models/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bookListObject: Book[] = bookDescriptionJson;
  bookToFind: string = "";
  constructor() { }

  ngOnInit(): void {
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

}
