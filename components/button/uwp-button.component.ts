import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

export type uwpButtonType = 'primary' | 'accent';

@Component({
  selector: '[uwp-button]',
  exportAs: 'uwpButton',
  templateUrl: './uwp-button.component.html',
  styleUrls: ['./uwp-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UWPButtonComponent implements OnInit {
  prefixCls = 'uwp-btn';

  @Input() class = '';
  @Input() uwpType: uwpButtonType = 'primary';
  @Input() uwpBorderSize = '2px';

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'uwp-btn',
      this.class,
      `${this.prefixCls}-${this.uwpType}`,
    ].join(' ');
  }

  @ViewChild('contentElement') contentElement: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  checkContent(): void {
    this.cdr.detectChanges();
  }
}
