import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NewWebsite';
  public SidenavToggleStatus: boolean = true;
  public DropdownToggleStatus: boolean = true;
  public Mobilesize: boolean = true;

  public ScreenWidth!: Number;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?: undefined) {
    this.ScreenWidth = window.innerWidth;
    if (this.ScreenWidth <= 767) {
      this.Mobilesize = false;
      this.dropdownClose();
    }
    if (this.ScreenWidth > 767) {
      this.Mobilesize = true;
    }
  }

  public sidenavToggle() {
    this.SidenavToggleStatus = !this.SidenavToggleStatus;
  }
  public sidenavClose() {
    this.SidenavToggleStatus = true;
  }
  public dropdownToggle() {
    this.DropdownToggleStatus = !this.DropdownToggleStatus;
  }
  public dropdownClose() {
    this.DropdownToggleStatus = true;
  }

  public onActivate() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    this.SidenavToggleStatus = true;
  }
}
