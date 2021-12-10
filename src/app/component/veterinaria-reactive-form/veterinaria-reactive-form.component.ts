import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Veterinaria } from 'src/app/models/veterianaria';

@Component({
  selector: 'app-veterinaria-reactive-form',
  templateUrl: './veterinaria-reactive-form.component.html',
  styleUrls: ['./veterinaria-reactive-form.component.css']
})
export class VeterinariaReactiveFormComponent implements OnInit {
  vetForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    modo: ['', Validators.required],
    formulacion: ['', Validators.required],
    indicaciones: ['', Validators.required],
    dosisAdm: ['', Validators.required],
    aplicabilidad: ['', Validators.required],
    presentacion: ['', Validators.required],
    image: ['', Validators.required],
    imageDetail: ['', Validators.required]
  });
  @Output()
  addVetEventFromParent = new EventEmitter<Veterinaria>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.addVetEventFromParent.emit(this.vetForm.value);
  }

}
