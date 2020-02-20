import { Component, OnInit } from "@angular/core";
import { DynamicTab } from "../../projects/core/src/lib/dynamic-tab.model";
import {
  Comp1Component,
  Comp2Component,
  Comp3Component,
  Comp4Component
} from "./sample.component";
import { DynamicTabStore } from "../../projects/core/src/lib/dynamic-tab.store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }

      .mt-2 {
        margin-top: 2rem;
      }

      .mb-2 {
        margin-bottom: 2rem;
      }

      .mr-2 {
        margin-right: 2rem;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  radioGroupOptions: DynamicTab[];
  selectedRadioGroupOption: DynamicTab;

  constructor(private tabStore: DynamicTabStore) {}

  ngOnInit() {
    this.bindRadioGroupOptions();
  }

  bindRadioGroupOptions(): void {
    setTimeout(() => {
      this.radioGroupOptions = [
        new DynamicTab("Comp1", Comp1Component, {
          parent: "AppComponent"
        }),
        new DynamicTab("Comp2", Comp2Component, {
          parent: "AppComponent",
          bla: "Foo"
        }),
        new DynamicTab("Comp3", Comp3Component, {
          parent: "AppComponent"
        }),
        new DynamicTab("Comp4", Comp4Component, {
          parent: "AppComponent"
        })
      ];
      this.selectedRadioGroupOption = this.radioGroupOptions[0];
    }, 200);
  }

  addTab() {
    this.tabStore.addTab(this.selectedRadioGroupOption);
  }
}
