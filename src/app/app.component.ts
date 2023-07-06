import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isSmallScreen = false;

  constructor(private breakPointObserver: BreakpointObserver) {}

  ngAfterContentInit(): void {
    this.breakPointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if (res.matches) {
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
        }
      }
    })
  }

  get sidenavMode(){
    return this.isSmallScreen ? 'over' : 'side'
  }
}
