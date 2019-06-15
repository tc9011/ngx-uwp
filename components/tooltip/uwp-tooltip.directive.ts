import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core'

import { isNil, InputBoolean } from 'ngx-uwp/core'

import { UwpTooltipComponent } from './uwp-tooltip.component'

type VerticalPosition = 'top' | 'bottom' | 'center'
type HorizontalPosition = 'start' | 'center' | 'end'

@Directive({
  selector: '[uwp-tooltip]',
  exportAs: 'uwpTooltip'
})
export class UwpTooltipDirective implements OnInit, OnDestroy, OnChanges {
  private _overlayRef: OverlayRef | null
  private _tooltipInstance: UwpTooltipComponent | null
  private _element: HTMLElement
  private _delayTimer = null
  private _portal: ComponentPortal<UwpTooltipComponent>
  private _manualListeners = new Map<string, EventListenerOrEventListenerObject>()

  protected needUpdateProperties = [
    'uwpContent'
  ]

  @Input() uwpVerticalPosition: VerticalPosition = 'top'
  @Input() uwpHorizontalPosition: HorizontalPosition = 'center'
  @Input() uwpContent: string | TemplateRef<void> | null
  @Input() uwpShowDelay = 0.15
  @Input() uwpHideDelay = 0.75
  @Input() @InputBoolean() uwpAutoClose: boolean

  constructor(
    private _overlay: Overlay,
    public _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _viewContainerRef: ViewContainerRef,
    private _factoryResolver: ComponentFactoryResolver,
    private _cdr: ChangeDetectorRef
  ) {
    this._element = _elementRef.nativeElement
    this._manualListeners
      .set('mouseenter', () => this.show())
      .set('mouseleave', () => this.hide())

    this._manualListeners.forEach((listener, event) => this._element.addEventListener(event, listener))
  }

  ngOnInit(): void {
    this.needUpdateProperties.forEach(property => this._changeComponentValue(property, this[property]))
  }

  ngOnDestroy(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose()
      this._tooltipInstance = null
    }

    this._manualListeners.forEach((listener, event) => {
      this._element.removeEventListener(event, listener)
    })
    this._manualListeners.clear()

    clearTimeout(this._delayTimer)
    this._delayTimer = null
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._tooltipInstance) {
      Object.keys(changes).forEach(key => {
        const change = changes[key]
        if (change) {
          this._tooltipInstance[key] = change.currentValue
        }
      })
    }
  }

  show(delay: number = this.uwpShowDelay): void {
    if (this._delayTimer) {
      clearTimeout(this._delayTimer)
    }

    this._delayTimer = setTimeout(() => {
      this._createOverlay()
      this.needUpdateProperties.forEach(property => this._changeComponentValue(property, this[property]))
      this._cdr.markForCheck()
      if (this.uwpAutoClose) {
        this.hide()
      }
    }, delay * 1000)
  }

  hide(delay: number = this.uwpHideDelay): void {
    if (this._delayTimer) {
      clearTimeout(this._delayTimer)
    }

    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._delayTimer = setTimeout(() => {
        this._overlayRef.dispose()
      }, delay * 1000)
    }
  }

  private _changeComponentValue(key: string, value: string): void {
    if (this._tooltipInstance && !isNil(value)) {
      this._tooltipInstance[key] = value
    }
  }

  private _updatePosition(): void {
  }

  private _createOverlay(): void {
    const strategy = this._overlay.position()
      .flexibleConnectedTo(this._element)
      .withFlexibleDimensions(false)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetX: 0,
        offsetY: 0
      }])
    strategy.withLockedPosition(true)
    const config = new OverlayConfig({positionStrategy: strategy})
    config.scrollStrategy = this._overlay.scrollStrategies.reposition()
    this._overlayRef = this._overlay.create(config)
    this._portal = this._portal || new ComponentPortal(UwpTooltipComponent, this._viewContainerRef)
    const overlayRef = this._overlayRef.attach(this._portal)
    this._tooltipInstance = overlayRef.instance
    this._tooltipInstance.cdr.markForCheck()
  }
}
