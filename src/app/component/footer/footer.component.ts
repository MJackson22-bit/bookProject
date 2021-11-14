import { Component, OnInit } from '@angular/core';
import { InfoSite} from '../../models/infoSite';
import { infoSiteJson } from '../../_files/infoSite';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  infoSiteObject: InfoSite = infoSiteJson;
  constructor() { }

  ngOnInit(): void {
  }

}
