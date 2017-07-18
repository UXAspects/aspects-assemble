import { Renderable, VectorElement } from '../renderable';
import { TableControl } from '../controls/table-control';
import { PaginationControl } from '../controls/pagination-control';
import { PAGE_CONTENT_HEIGHT } from '../constants';

export class ListViewLayout extends Renderable {
    
    private _listView: VectorElement;

    constructor() {
        super();

        // create the table control
        let table = new TableControl(19);

        // create pagination control
        let pagination = new PaginationControl(5)
            .attr('x', 20)
            .attr('y', PAGE_CONTENT_HEIGHT - 75);

        this._listView = new VectorElement('svg')
            .insert(table, pagination);
    }

    getVectorElement(): VectorElement {
        return this._listView;
    }

}