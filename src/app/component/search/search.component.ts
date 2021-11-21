import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { bookDescriptionJson } from '../../_files/book';
import { Book } from '../../models/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bookListObject: Book[] = bookDescriptionJson;
  showNewBook = false;
  bookToFind: string = "";
  @Output()
  resetBookEventParent = new EventEmitter<Book[]>();
  @Output()
  findBookEventParent = new EventEmitter<string>();
  @Output()
  showAddBookEventParent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  showAddBookForm(){
    this.showAddBookEventParent.emit(!this.showNewBook);
  }
  

}
