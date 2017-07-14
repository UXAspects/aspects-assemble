import { Renderable, VectorElement } from '../renderable';
import { SIDE_NAVIGATION_MENU_ITEM_HEIGHT } from '../constants';
import { IconService } from '../../services/icon/icon.service';
import { stateServiceInstance } from '../../app.component';

export class SideNavigationItemControl extends Renderable {

    private _item: VectorElement;
    private _iconService: IconService = new IconService();

    constructor(iconName: string, text: string, active: boolean) {
        super();

        let indicator = new VectorElement('rect')
            .attr('width', 4)
            .attr('height', '100%')
            .attr('fill', stateServiceInstance.theme.primary);

        let icon = new VectorElement(this._iconService.getIconHtml(this._iconService[iconName]))
            .attr('x', '28')
            .attr('y', '15')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#fff');

        let label = new VectorElement('text')
            .attr('x', 60)
            .attr('y', 30)
            .attr('fill', '#fff')
            .style('font-weight', '600')
            .style('font-size', '15px')
            .text(text);

        this._item = new VectorElement('svg')
            .attr('x', 0)
            .attr('width', '100%')
            .attr('height', SIDE_NAVIGATION_MENU_ITEM_HEIGHT)
            .insert(indicator, icon, label);
    }

    getVectorElement(): VectorElement {
        return this._item;
    }

}