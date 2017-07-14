import { Renderable, VectorElement } from './renderable';
import { APPLICATION_WIDTH, APPLICATION_HEIGHT } from './constants';
import { StateService } from '../services/state/state.service';

export class Page extends Renderable {

    private _page: VectorElement;

    constructor(stateService: StateService) {
        super();

        let background = new VectorElement('rect')
            .attr('width', APPLICATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT)
            .attr('fill', stateService.theme.background);

        this._page = new VectorElement('svg')
            .attr('width', APPLICATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT)
            .insert(background);
    }

    getVectorElement(): VectorElement {
        return this._page;
    }

}