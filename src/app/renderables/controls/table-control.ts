import { Renderable, VectorElement } from '../renderable';
import { TableRowControl } from './table-row-control';
import { TABLE_ROW_HEIGHT } from '../constants';
import 'chance';

export class TableControl extends Renderable {

    private _table: VectorElement;

    constructor(itemCount: number) {
        super();

        this._table = new VectorElement('svg');

        // create table header row
        let header = new TableRowControl(true, ['Name', 'Address', 'Date']);

        this.insert(header);
            
        for (let idx = 1; idx <= itemCount; idx++) {

            let row = new TableRowControl(false, [chance.name(), chance.address(), (chance.date({ year: 2017 }) as Date).toDateString()])
                .attr('y', idx * TABLE_ROW_HEIGHT);

            this.insert(row);
        }
    }

    getVectorElement(): VectorElement {
        return this._table;
    }

}