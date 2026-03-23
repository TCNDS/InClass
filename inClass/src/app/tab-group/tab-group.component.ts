import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  standalone: false,
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
})
export class TabGroupComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    const visibleTabs = this.getVisibleTabs();

    if (visibleTabs.length > 0) {
      visibleTabs[0].active = true;
    }
  }
  selectTab(selectedTab: TabComponent): void {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    selectedTab.active = true;
  }

  getVisibleTabs(): TabComponent[] {
    return this.tabs.toArray().filter((tab) => !!tab.title);
  }
}
