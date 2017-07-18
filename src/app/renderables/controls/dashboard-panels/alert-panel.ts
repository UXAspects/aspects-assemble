import { Renderable, VectorElement } from '../../renderable';
import { stateServiceInstance } from '../../../app.component';

export class DashboardAlertPanel extends Renderable {
    
    private _panel: VectorElement;

    constructor(width: number, height: number) {
        super();

        let background = new VectorElement('rect')
            .attr('x', 1)
            .attr('width', width - 2)
            .attr('height', height - 1)
            .attr('stroke', '#ddd')
            .attr('stroke-width', '1')
            .attr('fill', '#fff');

        let title = new VectorElement('text')
            .attr('x', 20)
            .attr('y', 40)
            .attr('font-size', 27)
            .attr('font-weight', 700)
            .attr('fill', '#333')
            .text('Alert');

        let subtitle = new VectorElement('text')
            .attr('x', 20)
            .attr('y', 75)
            .attr('font-size', 17)
            .attr('fill', '#999')
            .text('18 Dec, 2016 10:17 AM');

        let line1 = new VectorElement('tspan')
            .attr('x', 20)
            .attr('y', 120)
            .text('Planned downtime:');

        let line2 = new VectorElement('tspan')
            .attr('x', 20)
            .attr('y', 150)
            .text('31 Dec, 2016 11PM PST -');

        let line3 = new VectorElement('tspan')
            .attr('x', 20)
            .attr('y', 180)
            .text('01 Jan, 2017 6 AM PST');

        let info = new VectorElement('text')
            .attr('x', 20)
            .attr('y', 120)
            .attr('font-size', 22)
            .attr('fill', '#333')
            .insert(line1, line2, line3);

        let marker = new VectorElement('polygon')
            .attr('x', 0)
            .attr('y', 0)
            .attr('points', `${ width } 0 ${width - 40} 0 ${ width } 40`)
            .attr('fill', '#f78f4c');

        this._panel = new VectorElement('svg')
            .insert(background, title, subtitle, info, marker);
    }

    getVectorElement(): VectorElement {
        return this._panel;
    }

}