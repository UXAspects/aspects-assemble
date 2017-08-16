import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BuilderService } from '../../services/builder/builder.service';

@Component({
    selector: 'uxa-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    
    constructor(private _builder: BuilderService) { }

    create() {
        this._builder.create();
    }
}