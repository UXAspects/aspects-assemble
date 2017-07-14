import { Renderable, VectorElement } from '../renderable';
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

        let panel = new VectorElement('rect')
            .attr('x', this.getX(0))
            .attr('y', this.getY(0))
            .attr('width', this.getWidth(4))
            .attr('height', this.getHeight(2))
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        return panel;
    }

    createServicePanel(): VectorElement {

        let panel = new VectorElement('rect')
            .attr('x', this.getX(0))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(2))
            .attr('height', this.getHeight(1))
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        return panel;
    }

    createUserPanel(): VectorElement {

        let panel = new VectorElement('rect')
            .attr('x', this.getX(2))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(1))
            .attr('height', this.getHeight(1))
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        return panel;
    }

    createAlertPanel(): VectorElement {

        let panel = new VectorElement('rect')
            .attr('x', this.getX(3))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(1))
            .attr('height', this.getHeight(1))
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', stateServiceInstance.theme.pageHeader);

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