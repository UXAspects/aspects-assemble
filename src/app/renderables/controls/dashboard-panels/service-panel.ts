import { Renderable, VectorElement } from '../../renderable';
import { stateServiceInstance } from '../../../app.component';

export class DashboardServicePanel extends Renderable {

    private _panel: VectorElement;

    constructor(width: number, height: number) {
        super();

        let background = new VectorElement('rect')
            .attr('width', width - 1)
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
            .text('Service status');

        let point1 = new VectorElement('circle')
            .attr('cx', 30)
            .attr('cy', 80)
            .attr('r', 8)
            .attr('fill', stateServiceInstance.theme.primary);

        let point2 = point1.clone()
            .attr('cy', 120);

        let point3 = point1.clone()
            .attr('cy', 160);

        let warningValues = { x: 21, y: 191, width: 18, height: 16 };

        let warning = new VectorElement('polygon')
            .attr('points', `${warningValues.x} ${warningValues.y + warningValues.height} ${warningValues.x + (warningValues.width / 2)} ${warningValues.y} ${warningValues.x + warningValues.width} ${warningValues.y + warningValues.height}`)
            .attr('fill', '#ff9048');

        let archiving = new VectorElement('text')
            .attr('x', 50)
            .attr('y', 85)
            .attr('font-size', 18)
            .attr('fill', '#666')
            .text('Archiving Service');

        let analytics = archiving.clone()
            .attr('y', 125)
            .text('Analytics Service');

        let search = archiving.clone()
            .attr('y', 165)
            .text('Search Service');

        let backup = archiving.clone()
            .attr('y', 205)
            .text('Backup Service');

        let divider = new VectorElement('line')
            .attr('x1', 400)
            .attr('x2', 400)
            .attr('y1', 25)
            .attr('y2', 215)
            .attr('stroke', '#ccc')
            .attr('stroke-width', '1');

        let packageHeader = new VectorElement('text')
            .attr('x', 430)
            .attr('y', 75)
            .attr('font-size', 16)
            .attr('font-weight', 300)
            .attr('fill', '#999')
            .text('Package');

        let packageName = archiving.clone()
            .attr('x', 430)
            .attr('y', 100)
            .text('Aspects');

        let packageVersion = packageName.clone()
            .attr('y', 125)
            .text('Ultimate');

        let updatedHeader = packageHeader.clone()
            .attr('y', 165)
            .text('Last Updated');

        let updatedDate = packageName.clone()
            .attr('y', 190)
            .text('16 Dec, 2016');

        this._panel = new VectorElement('svg')
            .insert(background, title, point1, point2, point3, warning, archiving, analytics, search, backup, divider, packageHeader, packageName, packageVersion, updatedHeader, updatedDate);
    }

    getVectorElement(): VectorElement {
        return this._panel;
    }

}