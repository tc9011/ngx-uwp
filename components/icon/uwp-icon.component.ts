import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { Icons } from './icons';
import { isNilObject, isNil } from 'ngx-uwp/core';


@Component({
  selector: '[uwp-icon]',
  exportAs: 'uwpIcon',
  templateUrl: './uwp-icon.component.html',
  styleUrls: ['./uwp-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'uwp-icon'
  }
})
export class UwpIconComponent implements AfterViewInit {
  private _iconType: string;

  @Input()
  set iconType(value: string) {
    const _value = value.toLowerCase();
    this._iconType = Icons[_value.charAt(0).toUpperCase() + _value.slice(1)];
  }

  get iconType() {
    return this._iconType;
  }

  @Input() iconHover: object;

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(element: HTMLElement) {
    if (!isNil(this.iconHover) && !isNilObject(this.iconHover)) {
      for (const key of Object.keys(this.iconHover)) {
        this._renderer.setStyle(element, key, this.iconHover[key]);
      }
    }
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(element: HTMLElement) {
    if (!isNil(this.iconHover) && !isNilObject(this.iconHover)) {
      for (const key of Object.keys(this.iconHover)) {
        this._renderer.removeStyle(element, key, this.iconHover[key]);
      }
    }
  }

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this._createIconElement();
  }

  private _setElement(element: HTMLElement) {
    this._renderer.appendChild(this._el.nativeElement, element);
  }

  private _createIconElement() {
    const span = this._renderer.createElement('span');
    const text = this._renderer.createText(this.iconType);
    this._renderer.appendChild(span, text);
    this._setElement(span);
  }
}
