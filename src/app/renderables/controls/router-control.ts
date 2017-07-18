import { Renderable, VectorElement } from '../renderable';
import { PAGE_CONTENT_WIDTH, PAGE_CONTENT_HEIGHT, PAGE_CONTENT_HORIZONTAL_PADDING, PAGE_CONTENT_VERTICAL_PADDING } from '../constants';
import { PageData, PageLayout } from '../../services/state/state.service';
import { stateServiceInstance } from '../../app.component';
import { ListViewLayout, DashboardLayout } from '../index';
import { PartitionMapLayout } from '../layouts/partition-map-layout';

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

        let pagePadding = (PAGE_CONTENT_HORIZONTAL_PADDING * 2);

        switch (page.layout) {

            case PageLayout.ListView:
                this._layout = new ListViewLayout();
                break;

            case PageLayout.Dashboard:
                this._layout = new DashboardLayout();
                break;

            case PageLayout.PartitionMap:
                this._layout = new PartitionMapLayout();
                pagePadding = 0;
                break;
        }

        // position and size the layout
        this._layout.attr('x', pagePadding === 0 ? 0 : PAGE_CONTENT_HORIZONTAL_PADDING)
            .attr('y', pagePadding === 0 ? 0 : PAGE_CONTENT_VERTICAL_PADDING)
            .attr('width', PAGE_CONTENT_WIDTH - pagePadding)
            .attr('height', PAGE_CONTENT_HEIGHT - pagePadding);

        // insert the new layout
        this.insert(this._layout);
    }

    getVectorElement(): VectorElement {
        return this._router;
    }
}