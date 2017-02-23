import { Component, OnInit } from '@angular/core';

import { BaseApplication } from '../base-application';

@Component({
  moduleId: module.id,
  selector: 'siq-app-dayparts',
  templateUrl: './app-dayparts.component.html',
  styleUrls: ['./app-dayparts.component.css']
})

export class AppDaypartsComponent extends BaseApplication implements OnInit{

  constructor() {
    super();

    this.name = "Dayparts";
    this.version = "1.2.3.4.5";

  }

  ngOnInit() {
    this.showName();
    this.showVersion();
  }

}
