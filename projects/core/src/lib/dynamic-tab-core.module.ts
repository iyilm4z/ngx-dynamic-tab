import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicTabContentComponent } from "./dynamic-tab-content.component";
import { DynamicTabConfig } from "./dynamic-tab.config";
import { dynamicTabProvider } from "./dynamic-tab.provider";

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicTabContentComponent],
  exports: [DynamicTabContentComponent]
})
export class DynamicTabCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: DynamicTabCoreModule) {
    if (parentModule) {
      throw new Error(
        "DynamicTabCoreModule is already loaded. Import it in the AppModule only!"
      );
    }
  }

  static forRoot(config?: DynamicTabConfig): ModuleWithProviders {
    return {
      ngModule: DynamicTabCoreModule,
      providers: [...dynamicTabProvider(config)]
    };
  }
}
