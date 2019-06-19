import { Injectable } from '@angular/core'

import { of, Observable } from 'rxjs'

import tinycolor from 'tinycolor2'

interface IThemeConfig {
  themeName?: 'dark' | 'light'
  accent?: string
  useFluentDesign?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UwpThemeService {
  private _themeName: 'dark' | 'light' = 'dark'
  private _accent = '#0078D7'
  private _useFluentDesign = false

  setTheme(themeConfig: IThemeConfig): void {
    const isDark = themeConfig.themeName === 'dark'
    this._themeName = themeConfig ? themeConfig.themeName || 'dark' : 'dark'
    this._accent = themeConfig ? themeConfig.accent || '#0078D7' : '#0078D7'
    this._useFluentDesign = themeConfig ? themeConfig.useFluentDesign || false : false

    const body = document.body
    body.style.setProperty('--alt', isDark ? '0' : '255')
    body.style.setProperty('--base', isDark ? '255' : '0')
    body.style.setProperty('--chromeLow', isDark ? '#171717' : '#f2f2f2')
    body.style.setProperty('--chromeMediumLow', isDark ? '#2b2b2b' : '#f2f2f2')
    body.style.setProperty('--chromeMedium', isDark ? '#1f1f1f' : '#e6e6e6')
    body.style.setProperty('--chromeHigh', isDark ? '#767676' : '#ccc')
    body.style.setProperty('--chromeAltLow', isDark ? '#f2f2f2' : '#171717')
    body.style.setProperty('--chromeDisabledLow', isDark ? '#858585' : '#7a7a7a')
    body.style.setProperty('--chromeDisabledHigh', isDark ? '#333' : '#ccc')

    this._setAccent(this._accent)
  }

  private _setAccent(accent: string): void {
    const accentColor = tinycolor(accent)
    const accentHex = accentColor.toHexString()
    const body = document.body
    body.style.setProperty('--accent', accent)
    body.style.setProperty('--accentLighter1', this._lighten(accentHex, 0.5))
    body.style.setProperty('--accentLighter2', this._lighten(accentHex, 0.7))
    body.style.setProperty('--accentLighter3', this._lighten(accentHex, 0.9))
    body.style.setProperty('--accentDarker1', this._darken(accentHex, 0.5))
    body.style.setProperty('--accentDarker2', this._darken(accentHex, 0.7))
    body.style.setProperty('--accentDarker3', this._darken(accentHex, 0.9))
    body.style.setProperty('--listAccentLow', accentColor.setAlpha(0.6).toRgbString())
    body.style.setProperty('--listAccentMedium', accentColor.setAlpha(0.8).toRgbString())
    body.style.setProperty('--listAccentHigh', accentColor.setAlpha(0.9).toRgbString())
  }

  private _darken(color: string, coefficient: number): string {
    const hsl = tinycolor(color).toHsl()
    hsl.l = hsl.l * (1 - coefficient)
    return tinycolor(hsl).toRgbString()
  }

  private _lighten(color: string, coefficient: number): string {
    const hsl = tinycolor(color).toHsl()
    hsl.l = hsl.l + (100 - hsl.l) * coefficient
    return tinycolor(hsl).toRgbString()
  }

  getTheme(): Observable<IThemeConfig> {
    return of({
      themeName: this._themeName,
      accent: this._accent,
      useFluentDesign: this._useFluentDesign
    })
  }
}
