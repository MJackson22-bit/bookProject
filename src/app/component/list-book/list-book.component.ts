import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  showNewVet = false;
  constructor(private vetService: BookService){}
  ngOnInit(): void {
    this.vetService.getVets().subscribe(data => this.vetListObject = data);
  }

  findBook() {
    this.bookListObject = bookDescriptionJson.filter(m => m.tittle.toLowerCase().includes(this.bookToFind.toLowerCase()));
    this.vetService.findVets(this.bookToFind).subscribe(data => this.vetListObject = data);
  }

  resetListBook(){
    this.bookListObject = bookDescriptionJson;
    this.bookToFind = "";
    this.vetService.getVets().subscribe(data => this.vetListObject = data);
  }

  deleteBook(book: Book){
    this.bookListObject = this.bookListObject.filter(m => m.id != book.id);
  }

  showAddBookForm(){
    this.showNewBook = !this.showNewBook;
  }

  showAddVetForm(){
    this.showNewVet = !this.showNewVet;
  }

  addBook(book: Book){
    bookDescriptionJson.push(book);
    this.showAddBookForm();
  }

  addVet(vet: Veterinaria){
    this.vetService.addVet(vet).subscribe(data => {
      vet.id = data;
      this.vetListObject?.push(vet);
    });
    this.showAddVetForm();
  }

  deleteVet(vet: Veterinaria){
    this.vetService.deleteVet(vet.id).subscribe(data => {
      console.log(data);
      this.vetService.getVets().subscribe(data => this.vetListObject = data);
    });
  }
  updateVet(vet: Veterinaria){
    this.vetService.updateVet(vet).subscribe(data => {
      console.log(data);
      this.vetService.getVets().subscribe(data => this.vetListObject = data);
    })
  }
}
