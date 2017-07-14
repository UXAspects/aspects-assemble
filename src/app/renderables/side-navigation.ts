import { Renderable, VectorElement, OptionalObservable } from './renderable';
import { SIDE_NAVIGATION_WIDTH, SIDE_NAVIGATION_MENU_ITEM_HEIGHT, PAGE_HEADER_HEIGHT } from './constants';
import { IconService } from '../services/icon/icon.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { StateService, PageData } from '../services/state/state.service';
import { SideNavigationItem } from './side-navigation-item';

export class SideNavigation extends Renderable {

    private _navigation: VectorElement;
    private _iconService: IconService = new IconService();
    private _items: SideNavigationItem[] = [];
    private _addButton: VectorElement;

    constructor(private _stateService: StateService) {
        super();

        // create a wrapper observable for the logo
        let logo$ = Observable.create((observer: Observer<string>) =>
            _stateService.logo.subscribe((src: string | FileList) =>
                src instanceof FileList ? observer.next(URL.createObjectURL(src.item(0))) : observer.next(src)));

        let background = new VectorElement('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', _stateService.theme.sideNavigation);

        let logo = new VectorElement('image')
            .attr('x', 28)
            .attr('y', 69)
            .attr('width', 47)
            .attr('height', 47)
            .attr('href', logo$);

        let brand = new VectorElement('text')
            .attr('x', 78)
            .attr('y', 100)
            .attr('fill', '#fff')
            .style('font-weight', '200')
            .style('font-size', '20px')
            .text(_stateService.brand);

        let hamburger = new VectorElement(this._iconService.getIconHtml(this._iconService.menu))
            .attr('x', 24)
            .attr('y', 24)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', '#fff');

        // create the add button
        let buttonBackground: VectorElement = new VectorElement('rect')
            .attr('x', 1)
            .attr('y', 1)
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', 'rgba(255, 255, 255, 0.1)')
            .style('cursor', 'pointer')
            .on('mouseenter', () => buttonBackground.attr('fill', 'rgba(255, 255, 255, 0.2)'))
            .on('mouseleave', () => buttonBackground.attr('fill', 'rgba(255, 255, 255, 0.1)'));

        let buttonLabel = new VectorElement('text')
            .attr('x', '50%')
            .attr('y', '25')
            .attr('fill', '#fff')
            .attr('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .text('Add Page');

        this._addButton = new VectorElement('svg')
            .attr('x', 15)
            .attr('y', 15 + PAGE_HEADER_HEIGHT + this._stateService.pages.getValue().length * SIDE_NAVIGATION_MENU_ITEM_HEIGHT)
            .attr('width', SIDE_NAVIGATION_WIDTH - 30)
            .attr('height', SIDE_NAVIGATION_MENU_ITEM_HEIGHT - 10)
            .insert(buttonBackground, buttonLabel);

        this._navigation = new VectorElement('svg')
            .attr('width', SIDE_NAVIGATION_WIDTH)
            .attr('height', '100%')
            .insert(background, logo, brand, hamburger, this._addButton);

        // Render Menu Items
        _stateService.pages.subscribe(pages => this.createItems(pages));

    }

    createItems(pages: PageData[]): void {

        // remove any existing menu items
        this._items.forEach(item => this.remove(item));

        // create new menu items
        this._items = pages.map(page => new SideNavigationItem(this._stateService, page.icon, page.text, page.active));

        // insert the new menu items
        this._items.forEach((item, index) => {
            item.attr('y', PAGE_HEADER_HEIGHT + (index * SIDE_NAVIGATION_MENU_ITEM_HEIGHT));
            this.insert(item);
        });

        // update the vertical position of the add button
        this._addButton.attr('y', 15 + PAGE_HEADER_HEIGHT + this._stateService.pages.getValue().length * SIDE_NAVIGATION_MENU_ITEM_HEIGHT);
    }

    getVectorElement(): VectorElement {
        return this._navigation;
    }

}