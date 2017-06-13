import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'uxa-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    
    @Output() onCreate = new EventEmitter<any>();

    create() {
        this.onCreate.emit();
    }
}