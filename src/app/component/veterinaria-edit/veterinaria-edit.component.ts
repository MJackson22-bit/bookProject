import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinaria } from 'src/app/models/veterianaria';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-veterinaria-edit',
  templateUrl: './veterinaria-edit.component.html',
  styleUrls: ['./veterinaria-edit.component.css']
})
export class VeterinariaEditComponent implements OnInit {
  id: any;
  vets?: Veterinaria[];
  @Output()
  editVetEventFromParent = new EventEmitter<Veterinaria>();
  vet: Veterinaria = {
    id: 0,
    nombre: "",
    descripcion: "",
    modo: '',
    formulacion: '',
    indicaciones: '',
    dosisAdm: '',
    aplicabilidad: '',
    presentacion: '',
    image: '',
    imageDetail: ''
  };
  constructor(private vetService: BookService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vetService.getVet(Number(this.id)).subscribe(data => {
      console.log(data.id);
      this.vet = data;
    }, (error) => {
      console.log(error);
    });

  }
  onSubmit(){
    //this.editVetEventFromParent.emit(this.vetForm.value);
    this.vetService.updateVet(this.vet, this.vet.id).subscribe(data =>{
      console.log(data);
      this.router.navigateByUrl('list-book');
      alert('Producto actualizado');
    }, (error) =>{
      console.log(error);
    });
  }

}
