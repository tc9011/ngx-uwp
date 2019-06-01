import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  AfterContentInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

export type uwpButtonType = 'primary' | 'accent';

@Component({
  selector: '[uwpButton]',
  exportAs: 'uwpButton',
  templateUrl: './uwp-button.component.html',
  styleUrls: ['./uwp-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UwpButtonComponent implements AfterContentInit {
  private prefixCls = 'uwp-btn';

  @Input() class = '';
  @Input() uwpType: uwpButtonType = 'primary';

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'uwp-btn',
      this.class,
      `${this.prefixCls}-${this.uwpType}`,
    ].join(' ');
  }

  @ViewChild('contentElement', { static: false }) contentElement: ElementRef;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngAfterContentInit(): void {
    this.checkContent();
  }

  checkContent(): void {
    this.cdr.detectChanges();
  }
}
