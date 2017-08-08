import { Component } from '@angular/core';
import { PropertiesService, ComponentProperty, ComponentPropertyType } from '../../services/properties/properties.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'uxa-properties-pane',
    templateUrl: './properties-pane.component.html',
    styleUrls: ['./properties-pane.component.less']
})
export class PropertiesPaneComponent {

    title: string = 'Component Properties';
    properties: BehaviorSubject<ComponentProperty[]>;

    // expose enum to view
    types = ComponentPropertyType;

    constructor(propertiesService: PropertiesService) {
        this.properties = propertiesService.properties;

        propertiesService.title.subscribe(title => this.title = title ? title : 'Component Properties');
    }

}