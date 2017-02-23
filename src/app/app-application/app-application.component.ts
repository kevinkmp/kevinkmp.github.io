import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siq-app-application',
  templateUrl: './app-application.component.html',
  styleUrls: ['./app-application.component.css']
})
export class AppApplicationComponent implements OnInit {
  name: string;
  version: string;

  constructor() { }

  showName () {
    console.log('Outputting name from base class: ' + this.name);
  }

  showVersion () {
    console.log('Outputting version from base class: ' + this.version);
  }

  ngOnInit() {
    console.log("hey hey");
  }

}
