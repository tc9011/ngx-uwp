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

// @ts-ignore
import { Icons } from './icons';
import { isNilObject, isNil } from 'ngx-uwp/core';


@Component({
  selector: '[uwpIcon]',
  exportAs: 'uwpIcon',
  templateUrl: './uwp-icon.component.html',
  styleUrls: ['./uwp-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UWPIconComponent implements AfterViewInit {
  private _iconType: string;

  @Input() class = '';
  @Input()
  set iconType(value: string) {
    const _value = value.toLowerCase();
    this._iconType = Icons[_value.charAt(0).toUpperCase() + _value.slice(1)];
  }

  get iconType() {
    return this._iconType;
  }

  @Input() iconHover: object;

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'uwp-icon',
      this.class,
    ].join(' ');
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(element: HTMLElement) {
    if (!isNil(this.iconHover) && !isNilObject(this.iconHover)) {
      for (const key of Object.keys(this.iconHover)) {
        this.renderer.setStyle(element, key, this.iconHover[key]);
      }
    }
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(element: HTMLElement) {
    if (!isNil(this.iconHover) && !isNilObject(this.iconHover)) {
      for (const key of Object.keys(this.iconHover)) {
        this.renderer.removeStyle(element, key, this.iconHover[key]);
      }
    }
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.createIconElement();
  }

  private setElement(element: HTMLElement) {
    this.renderer.appendChild(this.el.nativeElement, element);
  }

  private createIconElement() {
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(this.iconType);
    this.renderer.appendChild(span, text);
    this.setElement(span);
  }
}
