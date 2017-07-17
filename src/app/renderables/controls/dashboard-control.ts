import { Renderable, VectorElement, InlineSVG } from '../renderable';
import { stateServiceInstance } from '../../app.component';
import { PAGE_CONTENT_INNER_WIDTH, PAGE_CONTENT_INNER_HEIGHT, DASHBOARD_PANEL_SPACING } from '../constants';

const COLUMN_COUNT = 4;
const ROW_COUNT = 3;

export class DashboardControl extends Renderable {

    private _dashboard: VectorElement;

    constructor() {
        super();

        this._dashboard = new VectorElement('svg')
            .insert(this.createChartPanel(), this.createServicePanel(), this.createUserPanel(), this.createAlertPanel());
    }

    createChartPanel(): VectorElement {

        let background = new VectorElement('rect')
            .attr('width', this.getWidth(4) - 1)
            .attr('height', this.getHeight(2) - 1)
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        let chart = new VectorElement(new InlineSVG(require('!!svg-inline-loader!../../assets/svg/line-chart.svg')))
            .attr('x', this.getX(0) + 5)
            .attr('y', this.getY(0) + 10)
            .attr('width', this.getWidth(4) - 40)
            .attr('height', this.getHeight(2) - 40)
            .attr('preserveAspectRatio', 'none');

        let panel = new VectorElement('svg')
            .attr('x', this.getX(0))
            .attr('y', this.getY(0))
            .attr('width', this.getWidth(4))
            .attr('height', this.getHeight(2))
            .insert(background, chart);

        return panel;
    }

    createServicePanel(): VectorElement {

        let background = new VectorElement('rect')
            .attr('width', this.getWidth(2) - 1)
            .attr('height', this.getHeight(1) - 1)
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        let content = new VectorElement(new InlineSVG(require('!!svg-inline-loader!../../assets/svg/service-panel.svg')))
            .attr('x', -40)
            .attr('y', 15)
            .attr('width', this.getWidth(2) - 40)
            .attr('height', this.getHeight(1) - 40);

        let panel = new VectorElement('svg')
            .attr('x', this.getX(0))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(2))
            .attr('height', this.getHeight(1))
            .attr('width', this.getWidth(4))
            .attr('height', this.getHeight(2))
            .insert(background, content);

        return panel;
    }

    createUserPanel(): VectorElement {

        let background = new VectorElement('rect')
            .attr('x', 1)        
            .attr('width', this.getWidth(1) - 2)
            .attr('height', this.getHeight(1) - 1)
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        let content = new VectorElement(new InlineSVG(require('!!svg-inline-loader!../../assets/svg/users-panel.svg')))
            .attr('x', 20)
            .attr('y', -15)
            .attr('width', this.getWidth(1) - 40)
            .attr('height', this.getHeight(1) - 40);

        let panel = new VectorElement('svg')
            .attr('x', this.getX(2))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(1))
            .attr('height', this.getHeight(1))
            .insert(background, content);

        return panel;
    }

    createAlertPanel(): VectorElement {

        let background = new VectorElement('rect')
            .attr('x', 1)        
            .attr('width', this.getWidth(1) - 2)
            .attr('height', this.getHeight(1) - 1)
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        let content = new VectorElement(new InlineSVG(require('!!svg-inline-loader!../../assets/svg/alert-panel.svg')))
            .attr('x', 20)
            .attr('y', -15)
            .attr('width', this.getWidth(1) - 40)
            .attr('height', this.getHeight(1) - 40);

        let marker = new VectorElement('polygon')
            .attr('x', 0)
            .attr('y', 0)
            .attr('points', `${this.getWidth(1)} 0 ${ this.getWidth(1) - 40 } 0 ${this.getWidth(1)} 40`)
            .attr('fill', '#f78f4c');

        let panel = new VectorElement('svg')
            .attr('x', this.getX(3))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(1))
            .attr('height', this.getHeight(1))
            .insert(background, content, marker);

        return panel;
    }

    getX(column: number): number {
        let dashboardWidth = PAGE_CONTENT_INNER_WIDTH;
        let columnWidth = dashboardWidth / COLUMN_COUNT;
        let padding = DASHBOARD_PANEL_SPACING;

        return (columnWidth * column) + padding;
    }

    getY(row: number): number {
        let dashboardHeight = PAGE_CONTENT_INNER_HEIGHT;
        let rowHeight = dashboardHeight / ROW_COUNT;
        let padding = DASHBOARD_PANEL_SPACING;

        return (rowHeight * row) + padding;
    }

    getWidth(columnSpan: number): number {
        let dashboardWidth = PAGE_CONTENT_INNER_WIDTH;
        let columnWidth = dashboardWidth / COLUMN_COUNT;
        let padding = DASHBOARD_PANEL_SPACING * 2;
        let targetWidth = columnWidth * columnSpan;

        return targetWidth - padding;
    }

    getHeight(rowSpan: number): number {
        let dashboardHeight = PAGE_CONTENT_INNER_HEIGHT;
        let rowHeight = dashboardHeight / ROW_COUNT;
        let padding = DASHBOARD_PANEL_SPACING * 2;
        let targetHeight = rowHeight * rowSpan;

        return targetHeight - padding;
    }

    getVectorElement(): VectorElement {
        return this._dashboard;
    }

}