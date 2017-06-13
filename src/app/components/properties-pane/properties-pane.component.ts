import { Component, OnInit, QueryList, ContentChildren } from '@angular/core';
import { PropertyBoxComponent } from '../property-box/property-box.component';

@Component({
    selector: 'uxa-properties-pane',
    templateUrl: './properties-pane.component.html',
    styleUrls: ['./properties-pane.component.less']
})
export class PropertiesPaneComponent {

    @ContentChildren(PropertyBoxComponent) propertyBoxes: QueryList<PropertyBoxComponent>;

    constructor() { }

    ngAfterViewInit() {
        this.propertyBoxes.forEach(box => box.setContainer(this));
    }

    collapseAll() {
        this.propertyBoxes.forEach(box => box.collapse());
    }
}