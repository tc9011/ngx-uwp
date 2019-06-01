import { Injectable } from '@angular/core';

import tinycolor from 'tinycolor2';
import { Observable, of } from 'rxjs';

interface IThemeConfig {
  themeName?: 'dark' | 'light';
  accent?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UWPThemeService {
  themeName: 'dark' | 'light' = 'dark';
  accent = '#0078D7';

  public setTheme(themeConfig: IThemeConfig) {
    this.themeName = themeConfig ? themeConfig.themeName || 'dark' : 'dark';
    this.accent = themeConfig ? themeConfig.accent || '#0078D7' : '#0078D7';
    if (this.themeName === 'dark') {
      document.body.style.setProperty('--alt', '0');
      document.body.style.setProperty('--base', '255');
    } else {
      document.body.style.setProperty('--alt', '255');
      document.body.style.setProperty('--base', '0');
    }

    const accentRGB = tinycolor(this.accent).toRgb();
    document.body.style.setProperty('--accentR', accentRGB.r);
    document.body.style.setProperty('--accentG', accentRGB.g);
    document.body.style.setProperty('--accentB', accentRGB.b);
  }

  public getTheme(): Observable<IThemeConfig> {
    return  of({
      themeName: this.themeName,
      accent: this.accent,
    });
  }
}
