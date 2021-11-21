import { Component } from '@angular/core';
import { Book } from './models/book';
import { bookDescriptionJson } from './_files/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book - Jack';

}
