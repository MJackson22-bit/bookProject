import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  model = new Book();

  @Output()
  addBookEventFromParent = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }
  newBook(){
    this.model = new Book();
  }
  onSubmit(){
    this.addBookEventFromParent.emit(this.model);
    this.model = new Book();
  }

}
