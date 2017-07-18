import { Renderable, VectorElement, InlineSVG } from '../../renderable';
import { stateServiceInstance } from '../../../app.component';

export class DashboardChartPanel extends Renderable {

    private _panel: VectorElement;

    constructor(width: number, height: number) {
        super();

        let background = new VectorElement('rect')
            .attr('width', width - 1)
            .attr('height', height - 1)
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', '#fff');

        let chart = new VectorElement(new InlineSVG(require('!!svg-inline-loader!../../../assets/svg/line-chart.svg')))
            .attr('x', 15)
            .attr('y', 20)
            .attr('width', width - 40)
            .attr('height', height - 40)
            .attr('preserveAspectRatio', 'none');

        this._panel = new VectorElement('svg')
            .insert(background, chart);
    }
    
    getVectorElement(): VectorElement {
        return this._panel;
    }

}