import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'

export type uwpButtonType = 'primary' | 'accent'

@Component({
  selector: '[uwp-button]',
  exportAs: 'uwpButton',
  templateUrl: './uwp-button.component.html',
  styleUrls: ['./uwp-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UwpButtonComponent implements AfterContentInit {
  private _prefixCls = 'uwp-btn'

  @Input() class = ''
  @Input() uwpType: uwpButtonType = 'primary'

  @HostBinding('class')
  get hostClasses(): string {
    return ['uwp-btn', this.class, `${this._prefixCls}-${this.uwpType}`].join(' ')
  }

  @ViewChild('contentElement', { static: false }) contentElement: ElementRef

  constructor(private _cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.checkContent()
  }

  checkContent(): void {
    this._cdr.detectChanges()
  }
}
