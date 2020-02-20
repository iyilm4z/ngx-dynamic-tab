import { DynamicTab } from "./dynamic-tab.model";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, pluck } from "rxjs/operators";
import { DynamicTabConfig } from "./dynamic-tab.config";

export class DynamicTabStore {
  public readonly $config: Observable<DynamicTabConfig>;

  private _configStore: BehaviorSubject<DynamicTabConfig>;
  private readonly initialConfig: DynamicTabConfig = {
    tabs: [],
    defaultProvider: "material"
  };

  constructor(config: DynamicTabConfig) {
    if (config) {
      this.initialConfig = Object.assign(this.initialConfig, config);
    }
    this._configStore = new BehaviorSubject(this.initialConfig);
    this.$config = this._configStore.asObservable();
  }

  public get tabs(): Observable<DynamicTab[]> {
    return this.$config.pipe(
      pluck("tabs"),
      distinctUntilChanged()
    ) as Observable<DynamicTab[]>;
  }

  public setTabs(value: DynamicTab[]): void {
    this._configStore.next(
      Object.assign(this._configStore.value, { tabs: value })
    );
  }

  public addTab(tab: DynamicTab) {
    const tabs = [...this._configStore.getValue().tabs];

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].active = false;
    }

    var existingTab = tabs.find(x => x.id === tab.id);
    if (existingTab) {
      existingTab.active = true;
    } else {
      tab.active = true;
      tabs.push(tab);
    }

    this._configStore.next(
      Object.assign(this._configStore.value, { tabs: tabs })
    );
  }

  public removeTab(index: number) {
    const tabs = [...this._configStore.getValue().tabs];

    tabs.splice(index, 1);
    if (tabs.length > 0) {
      tabs[tabs.length - 1].active = true;
    }

    this._configStore.next(
      Object.assign(this._configStore.value, { tabs: tabs })
    );
  }
}
