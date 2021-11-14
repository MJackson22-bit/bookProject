import { Component, Input, OnInit } from '@angular/core';
import { InfoSite } from '../../models/infoSite';
import { infoSiteJson } from '../../_files/infoSite';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  infoSiteObject: InfoSite = infoSiteJson;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  

}
