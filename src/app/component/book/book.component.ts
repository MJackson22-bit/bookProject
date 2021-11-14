import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  currentBook?: Book;
  isFavorite: boolean = false;
  textButtonFavorite: string = 'Agregar a Favoritos';

  @Output()
  deleteBookEventParent = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  
  }
  seeMore(){
    
  }
  addFavorite(){
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite) this.textButtonFavorite = "Quitar de Favoritos"
    else this.textButtonFavorite = "Agregar a Favoritos";
  }
  deleteBookComponent(){
    this.deleteBookEventParent.emit(this.currentBook);
  }
}
