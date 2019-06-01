import { Component, OnInit } from '@angular/core';
import { UwpThemeService } from 'ngx-uwp';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor(private themeService: UwpThemeService) {}

  ngOnInit() {}

  change() {
    this.themeService.getTheme().subscribe(
      data => {
        console.log(data);
        if (data.themeName === 'light') {
          this.themeService.setTheme({
            themeName: 'dark',
            accent: 'red'
          });
        } else {
          this.themeService.setTheme({
            themeName: 'light',
            accent: 'blue'
          });
        }
      }
    );
  }
}
