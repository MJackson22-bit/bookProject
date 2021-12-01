import { Component, OnInit } from '@angular/core';
import { bookDescriptionJson} from '../../_files/book';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  currentBook?: Book;
  getIsFavorite?: string;
  isFav?: boolean = false;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.currentBook = bookDescriptionJson.filter(m => m.id == Number(id))[0];
    const isFavorite = this.route.snapshot.paramMap.get('isFavorite');
    this.getIsFavorite = isFavorite?.toString();
    if(this.getIsFavorite == "true"){
      this.isFav = true;
    }
  }

}
