import { Renderable, VectorElement } from '../renderable';
import { PAGE_HEADER_WIDTH, PAGE_HEADER_HEIGHT } from '../constants';
import { IconService } from '../../services/icon/icon.service';
import { stateServiceInstance } from '../../app.component';
import { PageData } from '../../services/state/state.service';
import { Selectable } from '../modifiers/selectable';
import { ComponentPropertyType } from '../../services/properties/properties.service';

export class PageHeaderControl extends Renderable {

    private _header: VectorElement;
    private _iconService: IconService = new IconService();

    constructor() {
        super();

        let pageTitle$ = stateServiceInstance.activePage.map((page: PageData) => page.text);
        let breadcrumbs$ = stateServiceInstance.activePage.map((page: PageData) => page.breadcrumbs.join(' > '));

        let background = new VectorElement('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', stateServiceInstance.theme.pageHeader);

        let title = new VectorElement('text')
            .attr('x', 28)
            .attr('y', 105)
            .style('font-weight', '200')
            .style('font-size', '40px')
            .text(pageTitle$);

        let breadcrumbs = new VectorElement('text')
            .attr('x', 31)
            .attr('y', 70)
            .style('font-weight', '200')
            .style('font-size', '14px')
            .style('opacity', '0.7')
            .text(breadcrumbs$);

        // create page header icon menus
        let search = new VectorElement(this._iconService.getIconHtml(this._iconService.search))
            .attr('x', '0')
            .attr('y', '0')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#333');

        let notifications = new VectorElement(this._iconService.getIconHtml(this._iconService.notification))
            .attr('x', '40')
            .attr('y', '0')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#333');

        let settings = new VectorElement(this._iconService.getIconHtml(this._iconService.actions))
            .attr('x', '80')
            .attr('y', '0')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#333');

        let menuContainer = new VectorElement('svg')
            .attr('x', PAGE_HEADER_WIDTH - 130)
            .attr('y', 20)
            .insert(search, notifications, settings);

        this._header = new VectorElement('svg')
            .attr('width', PAGE_HEADER_WIDTH)
            .attr('height', PAGE_HEADER_HEIGHT)
            .insert(background, title, breadcrumbs, menuContainer);

        // make background rect selectable
        let selectable = new Selectable(background, 'Page Header', [
            {
                title: 'Background Color',
                placeholder: '#fff',
                type: ComponentPropertyType.Color,
                value: stateServiceInstance.theme.pageHeader
            }
        ]);
    }

    getVectorElement(): VectorElement {
        return this._header;
    }

}