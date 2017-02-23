export class BaseApplication {
  name: string;
  version: string;
  activityId: string;

  showName () {
    console.log('Outputting name from base class: ' + this.name);
  }

  showVersion () {
    console.log('Outputting version from base class: ' + this.version);
  }

  init () {
    this.showName();
    this.showVersion();
  }

  constructor() {
    console.log('app base constructor');
  }

}
