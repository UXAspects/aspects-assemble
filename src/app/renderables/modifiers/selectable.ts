import { VectorElement } from '../renderable';
import { ComponentProperty } from '../../services/properties/properties.service';
import { propertiesServiceInstance } from '../../app.component';

export class Selectable {

    private _selected: boolean = false;

    constructor(private _element: VectorElement, private _componentName: string, private _properties: ComponentProperty[] = []) { 

        _element.attr('shape-rendering', 'crispEdges');
        _element.addClass('component__selection');
        _element.on('click', () => setTimeout(this.select.bind(this)));

        // bind to all clicks in the window
        document.addEventListener('click', this.clickOutside.bind(this));
    }

    select(): void {
        this._element.addClass('component__selection--active');
        this._selected = true;

        propertiesServiceInstance.setTitle(this._componentName);
        propertiesServiceInstance.setProperties(this._properties);
    }

    deselect(): void {
        this._element.removeClass('component__selection--active');
        this._selected = false;

        propertiesServiceInstance.clearProperties();
    }

    clickOutside(event: MouseEvent): void {

        if (!this._element.getElement().contains(event.target as Node) && event.target instanceof SVGElement) {
            this.deselect();
        }
    }

}