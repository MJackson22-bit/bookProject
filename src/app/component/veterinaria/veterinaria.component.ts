import { Component, OnInit, Input } from '@angular/core';
import { Veterinaria } from '../../models/veterianaria';

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit {
  @Input()
  currentVet?: Veterinaria;
  constructor() { }

  ngOnInit(): void {
  }

}
