import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[icon]',
    host: {
        '[class]': 'iconClass',
    }
})
export class IconDirective implements OnInit {

    @Input() icon: string;
    iconClass: string;

    constructor(private _elementRef: ElementRef) { }

    ngOnInit(): void {
        let icon = this.icon.replace(/([a-z](?=[A-Z]))/g, '$1-').toLowerCase().replace('three', '3');
        this.iconClass = `hpe-icon hpe-${icon}`;
    }

}