import { Renderable, VectorElement } from '../../renderable';
import { stateServiceInstance } from '../../../app.component';

export class DashboardUserPanel extends Renderable {
    
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
            .attr('fill', '#333')
            .attr('font-weight', 700)
            .text('Users');

        let activeCount = new VectorElement('text')
            .attr('x', 20)
            .attr('y', 100)
            .attr('font-size', 48)
            .attr('font-weight', 300)
            .attr('fill', stateServiceInstance.theme.primary)
            .text('5');        

        let inactiveCount = new VectorElement('text')
            .attr('x', width - 20)
            .attr('y', 100)
            .attr('font-size', 48)
            .attr('font-weight', 300)
            .attr('fill', '#333')
            .attr('text-anchor', 'end')
            .text('18');

        let sparkTrack = new VectorElement('rect')
            .attr('x', 20)
            .attr('y', 120)
            .attr('width', width - 40)
            .attr('height', 5)
            .attr('fill', '#eee');

        let sparkBar = new VectorElement('rect')
            .attr('x', 20)
            .attr('y', 120)
            .attr('width', (width - 40) / 2)
            .attr('height', 5)
            .attr('fill', stateServiceInstance.theme.primary);

        let loggedIn = new VectorElement('text')
            .attr('x', 20)
            .attr('y', 150)
            .attr('font-size', 17)
            .attr('font-weight', 300)
            .attr('fill', '#999')
            .text('Logged In');

        let total = new VectorElement('text')
            .attr('x', width - 20)
            .attr('y', 150)
            .attr('font-size', 17)
            .attr('font-weight', 300)
            .attr('fill', '#999')
            .attr('text-anchor', 'end')
            .text('Total');

        this._panel = new VectorElement('svg')
            .insert(background, title, activeCount, inactiveCount, sparkTrack, sparkBar, loggedIn, total);
    }

    getVectorElement(): VectorElement {
        return this._panel;
    }

}