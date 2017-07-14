import { Renderable, VectorElement } from './renderable';
import { PAGE_CONTENT_WIDTH, PAGE_CONTENT_HEIGHT } from './constants';

export class Router extends Renderable {

    private _router: VectorElement;

    constructor() {
        super();

        this._router = new VectorElement('svg')
            .attr('width', PAGE_CONTENT_WIDTH)
            .attr('height', PAGE_CONTENT_HEIGHT)
            .attr('fill', '#ff0000');
    }

    getVectorElement(): VectorElement {
        return this._router;
    }
}