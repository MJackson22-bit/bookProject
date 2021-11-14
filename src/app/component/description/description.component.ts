import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input()
  currentBook?: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
