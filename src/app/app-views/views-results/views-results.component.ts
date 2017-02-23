import { Component, OnInit } from '@angular/core';
import {BaseApplicationResult} from "../../base-application-result";

@Component({
  selector: 'siq-views-results',
  templateUrl: './views-results.component.html',
  styleUrls: ['./views-results.component.css']
})
export class ViewsResultsComponent extends BaseApplicationResult implements OnInit {

  constructor() {
    super();
  }

  getActivityResults (id: string): void {
    this.getActivity(id);
  }

  ngOnInit() {
  }

}
