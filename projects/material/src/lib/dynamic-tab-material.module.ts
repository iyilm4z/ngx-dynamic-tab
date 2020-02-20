import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDynamicTabComponent } from "./mat-dynamic-tab.component";
import { MatTabsModule } from "@angular/material";
import { DynamicTabCoreModule } from "projects/core/src/public-api";

@NgModule({
  imports: [CommonModule, MatTabsModule, DynamicTabCoreModule],
  declarations: [MatDynamicTabComponent],
  exports: [MatDynamicTabComponent]
})
export class DynamicTabMaterialModule {}
