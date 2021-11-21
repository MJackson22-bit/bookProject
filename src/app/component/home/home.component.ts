import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { bookDescriptionJson } from '../../_files/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
