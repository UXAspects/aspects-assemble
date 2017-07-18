import { Renderable, VectorElement } from '../renderable';
import { TABLE_ROW_HEIGHT } from '../constants';
import { StateService } from '../../services/state/state.service';
import { stateServiceInstance } from '../../app.component';

export class TableRowControl extends Renderable {

    private _row: VectorElement;

    constructor(isHeader: boolean, columns: string[]) {
        super();

        let background = new VectorElement('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fff');

        let divider = new VectorElement('line')
            .attr('x1', 0)
            .attr('y1', TABLE_ROW_HEIGHT - 1)
            .attr('x2', '100%')
            .attr('y2', TABLE_ROW_HEIGHT - 1)
            .attr('shape-rendering', 'geometricPrecision')
            .attr('stroke', '#ddd')
            .attr('stroke-width', 1);

        let cells = columns.map((column, index) => {
            return new VectorElement('text')
                .attr('x', (((index / columns.length) * 100) + 2) + '%')
                .attr('y', 25)
                .attr('fill', isHeader ? '#333' : stateServiceInstance.theme.textColor)
                .attr('font-weight', isHeader ? 600 : 500)
                .text(column);
        });
        
        this._row = new VectorElement('svg')
            .attr('width', '100%')
            .attr('height', TABLE_ROW_HEIGHT)
            .insert(background, divider, ...cells);
    }

    getVectorElement(): VectorElement {
        return this._row;
    }

}