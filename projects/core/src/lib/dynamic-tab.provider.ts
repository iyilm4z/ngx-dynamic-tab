import { InjectionToken } from "@angular/core";
import { DynamicTabConfig } from "./dynamic-tab.config";
import { DynamicTabStore } from "./dynamic-tab.store";

export const DynamicTabConfigToken = new InjectionToken("DynamicTabConfig");

export function dynamicTabStoreFactory(
  config: DynamicTabConfig
): DynamicTabStore {
  return new DynamicTabStore(config);
}

export function dynamicTabProvider(config: DynamicTabConfig) {
  return [
    {
      provide: DynamicTabStore,
      useFactory: dynamicTabStoreFactory,
      deps: [DynamicTabConfigToken]
    },
    {
      provide: DynamicTabConfigToken,
      useValue: config
    }
  ];
}
