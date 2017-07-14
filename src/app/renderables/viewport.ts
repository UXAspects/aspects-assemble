import { Renderable, VectorElement } from './renderable';
import { VIEWPORT_WIDTH, VIEWPORT_HEIGHT } from './constants';

export class Viewport extends Renderable {

    private _viewport: VectorElement;

    constructor() {
        super();

        // create the element
        this._viewport = new VectorElement('svg')
            .attr('viewBox', `0 0 ${VIEWPORT_WIDTH} ${VIEWPORT_HEIGHT}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr('width', '100%')
            .attr('height', '100%')
            .style('filter', 'drop-shadow( 0px 0px 15px #bbb)');
    }

    getVectorElement(): VectorElement {
        return this._viewport;
    }

}