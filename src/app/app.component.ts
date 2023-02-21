import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NewWebsite';
  public SidenavToggleStatus: boolean = true;
  constructor() {}

  public sidenavtoggle() {
    this.SidenavToggleStatus = !this.SidenavToggleStatus;
  }
  public sidenavclose() {
    this.SidenavToggleStatus = true;
  }
  public onActivate() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    this.SidenavToggleStatus = true;
  }
}
