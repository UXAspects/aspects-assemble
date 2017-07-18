import { Renderable, VectorElement } from '../renderable';
import { ButtonControl, ButtonType } from './button-control';
import { PAGINATION_BUTTON_WIDTH, PAGINATION_BUTTON_HEIGHT } from '../constants';

export class PaginationControl extends Renderable {

    private _pagination: VectorElement;

    constructor(pageCount: number) {
        super();

        this._pagination = new VectorElement('svg');

        for (let idx = 0; idx < pageCount; idx++) {

            let button = new ButtonControl(idx === 0 ? ButtonType.Primary : ButtonType.Secondary, `${idx + 1}`, 45, 35)
                .attr('x', PAGINATION_BUTTON_WIDTH * idx)
                .attr('width', PAGINATION_BUTTON_WIDTH)
                .attr('height', PAGINATION_BUTTON_HEIGHT);

            this.insert(button);
        }
    }

    getVectorElement(): VectorElement {
        return this._pagination;
    }

}