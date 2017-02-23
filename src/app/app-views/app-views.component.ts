import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseApplication } from '../base-application';
import { ViewsResultsComponent } from './views-results/views-results.component';

@Component({
  moduleId: module.id,
  selector: 'siq-app-views',
  templateUrl: 'app-views.component.html',
  styleUrls: ['app-views.component.css'],
  entryComponents: [ViewsResultsComponent] // other components to be used inside of this component (formerly was an attribute called "directives")
})
export class AppViewsComponent extends BaseApplication implements OnInit {
  private sub: any;

  sampleActivities: string[];
  @ViewChild(ViewsResultsComponent) vrc: ViewsResultsComponent;
  // @ViewChild allows you to call into the instance of the component specified in the entryComponents array above
  // http://stackoverflow.com/questions/35140674/calling-a-function-in-a-child-angular2-component

  constructor(private route: ActivatedRoute) {
    super();

    this.name = "Views";
    this.version = "10.9.8.7.6";
    this.sampleActivities = ['11', '22', '33', '44', '55'];
  }

  ngOnInit() {
    this.init(); // function in super BaseApplication

    this.sub = this.route.params.subscribe(params => {
      // this.activityId = +params['id']; // (+) converts string 'id' to a number
      this.activityId = params['activityId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      if (this.activityId) {
        this.vrc.getActivityResults(this.activityId);
      }

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
