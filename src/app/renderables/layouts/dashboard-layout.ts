import { Renderable, VectorElement } from '../renderable';
import { DashboardControl } from '../controls/dashboard-control';

export class DashboardLayout extends Renderable {
    
    private _dashboard: VectorElement;

    constructor() {
        super();

        // create dashboard control
        let dashboardControl = new DashboardControl();

        this._dashboard = new VectorElement('svg')
            .insert(dashboardControl);
    }

    getVectorElement(): VectorElement {
        return this._dashboard;
    }

}