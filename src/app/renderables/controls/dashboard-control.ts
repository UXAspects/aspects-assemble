import { Renderable, VectorElement, InlineSVG } from '../renderable';
import { stateServiceInstance } from '../../app.component';
import { PAGE_CONTENT_INNER_WIDTH, PAGE_CONTENT_INNER_HEIGHT, DASHBOARD_PANEL_SPACING } from '../constants';
import { DashboardAlertPanel } from './dashboard-panels/alert-panel';
import { DashboardChartPanel } from './dashboard-panels/chart-panel';
import { DashboardUserPanel } from './dashboard-panels/user-panel';
import { DashboardServicePanel } from './dashboard-panels/service-panel';

const COLUMN_COUNT = 4;
const ROW_COUNT = 3;

export class DashboardControl extends Renderable {

    private _dashboard: VectorElement;

    constructor() {
        super();

        let chartPanel = new DashboardChartPanel(this.getWidth(4), this.getHeight(2))
            .attr('x', this.getX(0))
            .attr('y', this.getY(0))
            .attr('width', this.getWidth(4))
            .attr('height', this.getHeight(2));

        let servicePanel = new DashboardServicePanel(this.getWidth(2), this.getHeight(1))
            .attr('x', this.getX(0))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(2))
            .attr('height', this.getHeight(1));

        let userPanel = new DashboardUserPanel(this.getWidth(1), this.getHeight(1))
            .attr('x', this.getX(2))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(1))
            .attr('height', this.getHeight(1));

        let alertPanel = new DashboardAlertPanel(this.getWidth(1), this.getHeight(1))
            .attr('x', this.getX(3))
            .attr('y', this.getY(2))
            .attr('width', this.getWidth(1))
            .attr('height', this.getHeight(1));

        this._dashboard = new VectorElement('svg')
            .insert(chartPanel, servicePanel, userPanel, alertPanel);
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