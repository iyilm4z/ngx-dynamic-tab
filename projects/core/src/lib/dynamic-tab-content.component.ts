import {
  Component,
  ChangeDetectionStrategy,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { DynamicTab } from "./dynamic-tab.model";

@Component({
  selector: "dynamic-tab-content",
  template: "<ng-template #vc></ng-template>",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTabContentComponent implements OnInit {
  @Input() tab: DynamicTab;
  @ViewChild("vc", { read: ViewContainerRef, static: true })
  vc: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(this.tab.component);
    const componentRef = this.vc.createComponent(factory);
    componentRef.instance.dynamicTabData = this.tab.data;
  }
}
