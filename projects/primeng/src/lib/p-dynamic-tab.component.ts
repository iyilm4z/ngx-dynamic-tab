import { Component, OnInit } from "@angular/core";
import { DynamicTabStore, DynamicTab } from "projects/core/src/public-api";

@Component({
  selector: "p-dynamicTab",
  templateUrl: "./p-dynamic-tab.component.html"
})
export class PDynamicTabComponent implements OnInit {
  tabs: DynamicTab[] = [];
  selectedTabIndex: number;

  constructor(private tabStore: DynamicTabStore) {}

  ngOnInit() {
    this.tabStore.tabs.subscribe(tabs => {
      this.tabs = tabs;
      setTimeout(() => {
        this.selectedTabIndex = tabs.findIndex(tab => tab.active);
      }, 0);
    });
  }

  removeTab(index: number): void {
    this.tabStore.removeTab(index);
  }
}
