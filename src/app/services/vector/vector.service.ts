import { Injectable } from '@angular/core';
import { select } from 'd3';
import { ThemeService } from '../theme/theme.service';
import { IconSet } from '../../directives/icon/icon.directive';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'chance';

const BUTTON_HORIZONTAL_PADDING = 15;
const BUTTON_VERTICAL_PADDING = 4;
const TABLE_ROW_HEIGHT = 36;
const TABLE_ROW_PADDING = 20;
const PAGINATION_BUTTON_WIDTH = 45;
const PAGINATION_BUTTON_HEIGHT = 34;

@Injectable()
export class VectorService {

    constructor(private _themeService: ThemeService) { }

    createTable(): Selection {

        let table = select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

        table.append(() => this.createTableRow(true, ['Name', 'Address', 'Date']).node());

        for (let idx = 1; idx < 20; idx++) {
            table.append(() => this.createTableRow(false, [chance.name(), chance.address(), chance.date().toDateString()]).attr('y', idx * TABLE_ROW_HEIGHT).node());
        }

        return table;
    }

    createTableRow(isHeader: boolean, columns: string[]): Selection {

        let row = select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
            .attr('width', '100%')
            .attr('height', TABLE_ROW_HEIGHT);

        row.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fff');

        row.append('line')
            .attr('x1', 0)
            .attr('y1', TABLE_ROW_HEIGHT - 1)
            .attr('x2', '100%')
            .attr('y2', TABLE_ROW_HEIGHT - 1)
            .attr('shape-rendering', 'geometricPrecision')
            .attr('stroke', '#ddd')
            .attr('stroke-width', 1);

        columns.forEach((column, idx) => {
            let rowLabel = row.append('text')
                .attr('x', `${((idx / columns.length) * 100) + 2}%`)
                .attr('y', 25)
                .attr('fill', isHeader ? '#333' : this._themeService.textColor.getValue())
                .attr('font-weight', isHeader ? 600 : 500)
                .text(column);

            if (!isHeader) {
                this._themeService.textColor.subscribe(color => rowLabel.attr('fill', color));
            }
        });

        return row;
    }

    createButton(text: string | Observable<string>, backgroundColor: string | Observable<string>, foregroundColor: string | Observable<string>, width: number, height: number, borderColor: string | Observable<string> = backgroundColor): Selection {

        let button = select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
            .attr('width', width)
            .attr('height', height);

        let border = button.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', width)
            .attr('height', height)
            .attr('shape-rendering', 'crispEdges');


        let background = button.append('rect')
            .attr('x', 1)
            .attr('y', 2)
            .attr('width', width - 2)
            .attr('height', height - 4)
            .attr('shape-rendering', 'crispEdges');

        let label = button.append('text')
            .attr('x', '50%')
            .attr('y', '65%')
            .attr('text-anchor', 'middle');

        this.toObservable(borderColor).subscribe(brColor => border.attr('fill', brColor));
        this.toObservable(backgroundColor).subscribe(bgColor => background.attr('fill', bgColor));
        this.toObservable(foregroundColor).subscribe(fgColor => label.attr('fill', fgColor));
        this.toObservable(text).subscribe(textValue => label.text(textValue));

        return button;
    }

    createPagination(pageCount: number): Selection {

        let pagination = select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

        for (let idx = 0; idx < pageCount; idx++) {

            let button = this.createButton(`${idx + 1}`, idx === 0 ? this._themeService.primary : this._themeService.secondary, idx === 0 ? '#fff' : '#999', 45, 35, idx === 0 ? this._themeService.primary : '#ccc')
                .attr('x', PAGINATION_BUTTON_WIDTH * idx)
                .attr('width', PAGINATION_BUTTON_WIDTH)
                .attr('height', PAGINATION_BUTTON_HEIGHT);

            pagination.append(() => button.node());
        }

        return pagination;
    }

    /**
     * This function allows us to easily make every property an observable.
     * If it already is an observable then it will simply return the existing value
     * otherwise it will convert the value to an observable allowing us to only write
     * one implentation assuming everything is an observable.
     */
    private toObservable(value: any | Observable<string>): Observable<any> {

        if (value instanceof Observable) {
            return value;
        }

        return Observable.of(value);
    }

}

export type Selection = d3.Selection<any, {}, null, undefined>;