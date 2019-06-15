import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'uwpTooltip',
  exportAs: 'uwpTooltipComponent',
  templateUrl: './uwp-tooltip.component.html',
  styleUrls: ['./uwp-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UwpTooltipComponent implements OnInit {
  @Input() uwpContent: string | TemplateRef<void> | null

  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  isTemplate(): boolean {
    return this.uwpContent instanceof TemplateRef
  }
}
