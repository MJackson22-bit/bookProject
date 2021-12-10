import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Veterinaria } from '../../models/veterianaria';

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit {
  @Input()
  currentVet?: Veterinaria;
  
  @Output()
  deleteVetEventParent = new EventEmitter<Veterinaria>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentVet);
  }
  deleteVetComponent(){
    this.deleteVetEventParent.emit(this.currentVet);
  }
}
