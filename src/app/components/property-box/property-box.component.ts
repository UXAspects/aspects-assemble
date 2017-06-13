import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PropertiesPaneComponent } from '../properties-pane/properties-pane.component';

@Component({
    selector: 'uxa-property-box',
    templateUrl: './property-box.component.html',
    styleUrls: ['./property-box.component.less']
})
export class PropertyBoxComponent implements OnInit {

    @Input() expanded: boolean = false;
    @Input() header: string;

    @Output() expandedChange = new EventEmitter<boolean>();

    private _propertiesPane: PropertiesPaneComponent;

    ngOnInit() { }

    setContainer(pane: PropertiesPaneComponent) {
        this._propertiesPane = pane;
    }

    expand(): void {
        this._propertiesPane.collapseAll();
        this.expanded = true;
        this.expandedChange.emit(true);
    }

    collapse(): void {
        this.expanded = false;
        this.expandedChange.emit(false);        
    }

    toggleExpanded(): void {
        if (this.expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    }
}