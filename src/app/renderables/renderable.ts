import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';

export abstract class Renderable {

    abstract getVectorElement(): VectorElement;

    getElement(): VectorElementType {
        return this.getVectorElement().getElement();
    }

    style(property: string, value: OptionalObservable<string>): VectorElement {
        return this.getVectorElement().style(property, value);
    }

    attr(name: string, value: OptionalObservable<string> | OptionalObservable<number>): VectorElement {
        return this.getVectorElement().attr(name, value);
    }

    text(value: OptionalObservable<string>): VectorElement {
        return this.getVectorElement().text(value);
    }

    html(value: OptionalObservable<string>): VectorElement {
        return this.getVectorElement().html(value);
    }

    on(event: string, callback: (event: Event) => void): VectorElement {
        return this.getVectorElement().on(event, callback);
    }

    insert(...children: Insertable[]): VectorElement {
        return this.getVectorElement().insert(...children);
    }

    remove(child: Insertable): VectorElement {
        return this.getVectorElement().remove(child);
    }
}

export class VectorElement {

    private _element: VectorElementType;

    constructor(type: VectorString | VectorElementType | InlineSVG) {

        if (type instanceof InlineSVG) {
            let parser = new DOMParser();
            this._element = parser.parseFromString(type.getSVG(), 'image/svg+xml').firstElementChild as SVGSVGElement;
        } else if (typeof type === 'string') {
            this._element = document.createElementNS('http://www.w3.org/2000/svg', type);
        } else {
            this._element = type;
        }
    }

    getElement(): VectorElementType {
        return this._element;
    }

    clone(): VectorElement {
        let node = this.getElement().cloneNode(true) as VectorElementType;
        return new VectorElement(node);
    }

    style(property: string, value: OptionalObservable<string>): VectorElement {
        toObservable<string>(value).subscribe(val => this._element.style[property] = val);
        return this;
    }

    attr(name: string, value: OptionalObservable<string> | OptionalObservable<number>): VectorElement {
        toObservable<string>(value).subscribe(val => {
            try {
                this._element.setAttributeNS(null, name, val);
            } catch (err) { }
        });
        return this;
    }

    text(value: OptionalObservable<string>): VectorElement {
        toObservable<string>(value).subscribe(val => this._element.textContent = val);
        return this;
    }

    html(value: OptionalObservable<string>): VectorElement {
        toObservable<string>(value).subscribe(val => this._element.innerHTML = val);
        return this;
    }

    on(event: string, callback: (event: Event) => void): VectorElement {
        Observable.fromEvent(this._element, event).subscribe(callback);
        return this;
    }

    insert(...children: Insertable[]): VectorElement {
        children.forEach(child => this._element.appendChild(child.getElement()));
        return this;
    }

    remove(child: Insertable): VectorElement {
        this._element.removeChild(child.getElement());
        return this;
    }
}

export class InlineSVG {
    constructor(private _svg: string) { }

    getSVG(): string {
        return this._svg;
    }
}

/**
 * This function allows us to easily make every property an observable.
 * If it already is an observable then it will simply return the existing value
 * otherwise it will convert the value to an observable allowing us to only write
 * one implentation assuming everything is an observable.
 */
function toObservable<T>(value: OptionalObservable<any>): Observable<T> {

    if (value instanceof Observable || value instanceof BehaviorSubject) {
        return value;
    }

    if (typeof value === 'function') {
        return Observable.of(value.call(this));
    }

    return Observable.of(value);
}

export type Insertable = VectorElement | Renderable;
export type OptionalObservable<T> = T | Function | Observable<T> | BehaviorSubject<T>;
export type VectorElementType = SVGElement | SVGGElement | SVGTextElement | SVGTSpanElement | SVGCircleElement | SVGLineElement | SVGRectElement | SVGImageElement | SVGPolygonElement | SVGDefsElement | SVGLinearGradientElement | SVGStopElement;
export type VectorString = 'svg' | 'text' | 'tspan' | 'circle' | 'polygon' | 'line' | 'rect' | 'g' | 'image' | 'defs' | 'linearGradient' | 'stop';