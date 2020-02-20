import { Component, OnInit } from "@angular/core";
import { DynamicTabStore, DynamicTab } from "projects/core/src/public-api";

@Component({
  selector: "mat-dynamic-tab",
  templateUrl: "./mat-dynamic-tab.component.html"
})
export class MatDynamicTabComponent implements OnInit {
  tabs: DynamicTab[] = [];
  selectedTabIndex: number;

  constructor(private tabStore: DynamicTabStore) {}

  ngOnInit() {
    this.tabStore.tabs.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTabIndex = tabs.findIndex(tab => tab.active);
    });
  }

  removeTab(index: number): void {
    this.tabStore.removeTab(index);
  }
}
