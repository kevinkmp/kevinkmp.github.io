export class BaseApplicationResult {
  activityId: string;
  hasResults: boolean;

  getActivity (id: string) : void {
    this.activityId = id;
    this.hasResults = true;
  }

}
