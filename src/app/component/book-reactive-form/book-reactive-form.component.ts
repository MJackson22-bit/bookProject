import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../../models/book';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-book-reactive-form',
  templateUrl: './book-reactive-form.component.html',
  styleUrls: ['./book-reactive-form.component.css']
})
export class BookReactiveFormComponent implements OnInit {

  bookForm = this.fb.group({
    tittle: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    publication: ['', Validators.required],
    author: ['', Validators.required],
    matter: ['', Validators.required],
    synopsis: ['', Validators.required]
  });

  @Output()
  addBookEventFromParent = new EventEmitter<Book>();

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.addBookEventFromParent.emit(this.bookForm.value);
  }

}
