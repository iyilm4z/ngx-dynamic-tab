import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import {
  Comp1Component,
  Comp2Component,
  Comp3Component,
  Comp4Component
} from "./sample.component";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material";

import { DynamicTabCoreModule } from "projects/core/src/public-api";
import { DynamicTabMaterialModule } from "projects/material/src/public-api";
import { DynamicTabPrimengModule } from "projects/primeng/src/public-api";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    DynamicTabCoreModule.forRoot(),
    DynamicTabMaterialModule,
    DynamicTabPrimengModule
  ],
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  entryComponents: [
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
