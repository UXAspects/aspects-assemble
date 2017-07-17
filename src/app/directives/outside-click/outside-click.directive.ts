import { Directive, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({ 
    selector: '[uxaOutsideClick]'
})
export class OutsideClickDirective {
    
    @Output() uxaOutsideClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    constructor(private _elementRef: ElementRef) {}

    @HostListener('document:click', ['$event']) onClick(event: MouseEvent): void {
        if (event.target && !this._elementRef.nativeElement.contains(event.target)) {
            this.uxaOutsideClick.emit(event);
        }
    }

}