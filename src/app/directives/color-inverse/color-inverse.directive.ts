import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import Color = require('color-js/color');

@Directive({ selector: '[colorInverse]' })
export class ColorInverseDirective implements OnChanges {

    @Input() colorInverse: string = '#fff';

    constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.invertColor();
    }

    invertColor(): void {

        if (!this.invertColor) {
            return this.applyColor('#000');
        }

        let color = Color(this.colorInverse);
        let hsl: HSLAValue = color.toHSL() as any;

        if (hsl.lightness < 0.6) {
            this.applyColor('#fff');
        } else {
            this.applyColor('#000');            
        }

    }

    applyColor(color: string): void {
        this._renderer.setStyle(this._elementRef.nativeElement, 'color', color);
    }
}

export interface HSLAValue {
    hue: number;
    saturation: number;
    lightness: number;
    alpha?: number;
}