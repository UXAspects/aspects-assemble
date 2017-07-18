import { Renderable, VectorElement } from '../renderable';
import { SIDE_NAVIGATION_MENU_ITEM_HEIGHT } from '../constants';
import { IconService } from '../../services/icon/icon.service';
import { stateServiceInstance, contextMenuServiceInstance } from '../../app.component';
import { PageData } from '../../services/state/state.service';

export class SideNavigationItemControl extends Renderable {

    private _item: VectorElement;
    private _iconService: IconService = new IconService();

    constructor(page: PageData) {
        super();

        // map the active page to an indicator width
        let width$ = stateServiceInstance.activePage.map(activePage => activePage === page ? 4 : 0);

        let background: VectorElement = new VectorElement('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', 'transparent')
            .style('cursor', 'pointer')
            .on('mouseenter', () => background.attr('fill', 'rgba(255, 255, 255, 0.1)'))
            .on('mouseleave', () => background.attr('fill', 'transparent'))
            .on('click', () => {
                if (page !== stateServiceInstance.activePage.getValue()) {
                    stateServiceInstance.activePage.next(page);
                }
            })
            .on('contextmenu', (event: MouseEvent) => {
                contextMenuServiceInstance.show(event.pageX, event.pageY, [
                    {
                        title: 'Remove Page',
                        select: () => {
                            stateServiceInstance.removePage(page);
                        }
                    }
                ]);
            });

        let indicator = new VectorElement('rect')
            .attr('width', width$)
            .attr('height', '100%')
            .attr('fill', stateServiceInstance.theme.primary);

        let icon = new VectorElement(this._iconService.getIconHtml(this._iconService[page.icon]))
            .attr('x', '28')
            .attr('y', '15')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#fff')
            .style('pointer-events', 'none');

        let label = new VectorElement('text')
            .attr('x', 60)
            .attr('y', 30)
            .attr('fill', '#fff')
            .style('font-weight', '600')
            .style('font-size', '15px')
            .style('pointer-events', 'none')
            .text(page.text);

        this._item = new VectorElement('svg')
            .attr('x', 0)
            .attr('width', '100%')
            .attr('height', SIDE_NAVIGATION_MENU_ITEM_HEIGHT)
            .insert(background, indicator, icon, label);
    }

    getVectorElement(): VectorElement {
        return this._item;
    }

}