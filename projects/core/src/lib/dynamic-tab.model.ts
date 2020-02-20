import { Type } from "@angular/core";

export class DynamicTab {
  public id = Math.random()
    .toString(36)
    .substr(2, 5);
  public title: string;
  public component: Type<any>;
  public data: any;
  public active: boolean;

  constructor(title: string, component: Type<any>, data: any) {
    this.title = title;
    this.component = component;
    this.data = data;
  }
}
