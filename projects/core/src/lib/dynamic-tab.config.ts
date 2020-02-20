import { DynamicTab } from "./dynamic-tab.model";
export interface DynamicTabConfig {
  tabs: DynamicTab[];
  defaultProvider: "material" | "primeng";
}
