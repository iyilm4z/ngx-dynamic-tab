import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PDynamicTabComponent } from "./p-dynamic-tab.component";
import { TabViewModule } from "primeng/tabview";
import { DynamicTabCoreModule } from "projects/core/src/public-api";

@NgModule({
  imports: [CommonModule, TabViewModule, DynamicTabCoreModule],
  declarations: [PDynamicTabComponent],
  exports: [PDynamicTabComponent]
})
export class DynamicTabPrimengModule {}
