import { Component, Input } from "@angular/core";

@Component({
  template: "<p>I am comp1 and my dynamicTabData = {{dynamicTabData | json}}<p>"
})
export class Comp1Component {
  @Input() data: any;
}

@Component({
  template: "<p>I am comp2 and my dynamicTabData = {{dynamicTabData | json}}<p>"
})
export class Comp2Component {
  @Input() data: any;
}

@Component({
  template: "<p>I am comp3 and my dynamicTabData = {{dynamicTabData | json}}<p>"
})
export class Comp3Component {
  @Input() data: any;
}

@Component({
  template: "<p>I am comp4 and my dynamicTabData = {{dynamicTabData | json}}<p>"
})
export class Comp4Component {
  @Input() data: any;
}
