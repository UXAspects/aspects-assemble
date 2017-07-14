import { Renderable, VectorElement } from './../renderable';
import { APPLICATION_WIDTH, APPLICATION_HEIGHT } from './../constants';
import { stateServiceInstance } from '../../app.component';

export class PageControl extends Renderable {

    private _page: VectorElement;

    constructor() {
        super();

        let background = new VectorElement('rect')
            .attr('width', APPLICATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT)
            .attr('fill', stateServiceInstance.theme.background);

        this._page = new VectorElement('svg')
            .attr('width', APPLICATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT)
            .insert(background);
    }

    getVectorElement(): VectorElement {
        return this._page;
    }

}