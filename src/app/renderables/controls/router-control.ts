import { Renderable, VectorElement } from '../renderable';
import { PAGE_CONTENT_WIDTH, PAGE_CONTENT_HEIGHT, PAGE_CONTENT_HORIZONTAL_PADDING, PAGE_CONTENT_VERTICAL_PADDING } from '../constants';
import { PageData, PageLayout } from '../../services/state/state.service';
import { stateServiceInstance } from '../../app.component';
import { ListViewLayout } from '../layouts/list-view-layout';

export class RouterControl extends Renderable {

    private _router: VectorElement;
    private _layout: Renderable;

    constructor() {
        super();

        this._router = new VectorElement('svg')
            .attr('width', PAGE_CONTENT_WIDTH)
            .attr('height', PAGE_CONTENT_HEIGHT);

        // watch for changes to the active page
        stateServiceInstance.activePage.subscribe(page => this.setActiveLayout(page));
    }

    setActiveLayout(page: PageData): void {

        // remove any existing layout
        if (this._layout) {
            this.remove(this._layout);
        }

        switch (page.layout) {

            case PageLayout.ListView:
                this._layout = new ListViewLayout();
                break;
        }

        // position and size the layout
        this._layout.attr('x', PAGE_CONTENT_HORIZONTAL_PADDING)
            .attr('y', PAGE_CONTENT_VERTICAL_PADDING)
            .attr('width', PAGE_CONTENT_WIDTH - (PAGE_CONTENT_HORIZONTAL_PADDING * 2))
            .attr('height', PAGE_CONTENT_HEIGHT - (PAGE_CONTENT_VERTICAL_PADDING * 2));

        // insert the new layout
        this.insert(this._layout);
    }

    getVectorElement(): VectorElement {
        return this._router;
    }
}