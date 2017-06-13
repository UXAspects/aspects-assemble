import { Component, OnInit, ElementRef } from '@angular/core';
import { select } from 'd3';
import { ThemeService } from '../../services/theme/theme.service';

// size constants
const CONTAINER_WIDTH = 1920;
const CONTAINER_HEIGHT = 982;
const APPLICATION_WIDTH = 1620;
const APPLICATION_HEIGHT = 932;
const SIDE_NAVIGATION_WIDTH = 240;
const SIDE_NAVIGATION_MENU_ITEM_HEIGHT = 50;
const PAGE_HEADER_HEIGHT = 122;

@Component({
    selector: 'uxa-preview-pane',
    templateUrl: './preview-pane.component.html',
    styleUrls: ['./preview-pane.component.less']
})
export class PreviewPaneComponent {

    private _nativeElement: HTMLElement;
    // private _svg: d3.Selection<any, {}, null, null>;
    // private _topNavigation: d3.Selection<any, {}, null, null>;
    // private _body: d3.Selection<any, {}, null, null>;
    // private _logo: d3.Selection<any, {}, null, null>;
    // private _brand: d3.Selection<any, {}, null, null>;
    // private _header: d3.Selection<any, {}, null, null>;
    // private _breadcrumb: d3.Selection<any, {}, null, null>;

    private _container: d3.Selection<any, {}, null, undefined>;
    private _application: d3.Selection<any, {}, null, undefined>;
    private _sideNavigation: d3.Selection<any, {}, null, null>;
    private _sideNavigationMenu: d3.Selection<any, {}, null, null>;
    private _pageHeader: d3.Selection<any, {}, null, null>;
    private _pageBody: d3.Selection<any, {}, null, null>;
    private _pageTitle: d3.Selection<any, {}, null, null>;
    private _breadcrumbs: d3.Selection<any, {}, null, null>;
    private _logo: d3.Selection<any, {}, null, null>;
    private _brand: d3.Selection<any, {}, null, null>;
    private _menuItems: MenuItemElement[] = [];

    constructor(private _elementRef: ElementRef, private _themeService: ThemeService) {

        this.createContainer();
        this.createApplication();
        this.createSideNavigation();
        this.createPageHeader();
        this.createPageBody();

        // this.createContainer();
        // this.createSideNavigation();
        // this.createTopNavigation();
        // this.createPageBody();
    }

    createContainer(): void {
        this._container = select(this._elementRef.nativeElement)
            .append('svg')
            .attr('viewBox', `0 0 ${CONTAINER_WIDTH} ${CONTAINER_HEIGHT}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr('width', '100%')
            .attr('height', '100%')
            .style('filter', 'drop-shadow( 0px 0px 15px #bbb)');
    }

    createApplication(): void {

        this._application = this._container.append('svg')
            .attr('x', (CONTAINER_WIDTH - APPLICATION_WIDTH) / 2)
            .attr('y', (CONTAINER_HEIGHT - APPLICATION_HEIGHT) / 2)
            .attr('width', APPLICATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT);
    }

    createSideNavigation(): void {

        this._sideNavigation = this._application.append('svg')
            .attr('width', SIDE_NAVIGATION_WIDTH)
            .attr('height', '100%');

        this._sideNavigation.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#0C4751');

        this._logo = this._sideNavigation.append('svg:image')
            .attr('x', 28)
            .attr('y', 69)
            .attr('width', 47)
            .attr('height', 47)
            .attr('xlink:href', 'https://uxaspects.github.io/UXAspects/assets/img/UX-graphic.png');

        this._brand = this._sideNavigation.append('text')
            .attr('x', 78)
            .attr('y', 100)
            .attr('fill', '#fff')
            .style('font-weight', 200)
            .style('font-size', 20)
            .text('UX Aspects');

        this._sideNavigation.append('g')
            .html(require('!!svg-inline-loader!../../assets/icons/menu.svg'))
            .select('svg')
            .attr('x', 24)
            .attr('y', 24)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', '#fff');

        this._sideNavigationMenu = this._sideNavigation.append('svg')
            .attr('x', 0)
            .attr('y', PAGE_HEADER_HEIGHT);

        this.createSideNavigationItems();
    }

    createSideNavigationItems(): void {

        // clear any existing items in the menu
        this._sideNavigationMenu.empty();

        let menuItem = this._sideNavigationMenu.append('svg')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', '100%')
            .attr('height', SIDE_NAVIGATION_MENU_ITEM_HEIGHT);

        let indicator = menuItem.append('rect')
            .attr('width', 4)
            .attr('height', '100%')
            .attr('fill', '#008e89');

        let icon = menuItem.append('g')
            .html(require('!!svg-inline-loader!../../assets/icons/clone.svg'))
            .select('svg')
            .attr('x', '28')
            .attr('y', '15')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#fff');

        let label = menuItem.append('text')
            .attr('x', 60)
            .attr('y', 30)
            .attr('fill', '#fff')
            .style('font-weight', 600)
            .style('font-size', 15)
            .text('List Views');
    }

    createPageHeader(): void {

        this._pageHeader = this._application.append('svg')
            .attr('x', SIDE_NAVIGATION_WIDTH)
            .attr('width', APPLICATION_WIDTH - SIDE_NAVIGATION_WIDTH)
            .attr('height', PAGE_HEADER_HEIGHT);

        this._pageHeader.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fff');

        this._pageTitle = this._pageHeader.append('text')
            .attr('x', 28)
            .attr('y', 105)
            .style('font-weight', 200)
            .style('font-size', 40)
            .text('List View 1');

        this._breadcrumbs = this._pageHeader.append('text')
            .attr('x', 31)
            .attr('y', 70)
            .style('font-weight', 200)
            .style('font-size', 14)
            .style('opacity', 0.7)
            .text('List Views');

    }

    createPageBody(): void {

        this._pageBody = this._application.append('svg')
            .attr('x', SIDE_NAVIGATION_WIDTH)
            .attr('y', PAGE_HEADER_HEIGHT)
            .attr('width', APPLICATION_WIDTH - SIDE_NAVIGATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT - PAGE_HEADER_HEIGHT);

        this._pageBody.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fafafa');

    }

    // createContainer(): void {
    //     this._svg = select(this._elementRef.nativeElement)
    //         .append('svg')
    //         .attr('viewBox', '0 0 1100 1100')
    //         .attr('preserveAspectRatio', 'xMidYMid meet')
    //         .attr('width', '100%')
    //         .attr('height', '100%')
    //         .attr('class', 'preview-container')
    //         .style('filter', 'drop-shadow( 0px 0px 15px #bbb)');
    // }

    // createSideNavigation(): void {
    //     this._sideNavigation = this._svg.append('rect')
    //         .attr('x', 50)
    //         .attr('y', 50)
    //         .attr('width', 200)
    //         .attr('height', 600)
    //         .attr('fill', '#333');

    //     this._themeService.sideNavigation.subscribe(color => {
    //         this._sideNavigation.attr('fill', color);
    //     });

    //     this._themeService.pages.subscribe(pages => {
    //         this.removeAllMenuItems();

    //         pages.forEach((page, idx) => {
    //             this.createMenuItem({ active: idx === 0, text: page }, idx);
    //         });
    //     });

    //     this._themeService.primary.subscribe(color => {
    //         this._menuItems.forEach(item => item.indicator.attr('fill', color));
    //     });

    //     this.createLogo();
    //     this.createBrand();
    // }

    // createTopNavigation(): void {
    //     this._topNavigation = this._svg.append('rect')
    //         .attr('x', 250)
    //         .attr('y', 50)
    //         .attr('width', 800)
    //         .attr('height', 100)
    //         .attr('fill', '#fff');

    //     this._themeService.topNavigation.subscribe(color => {
    //         this._topNavigation.attr('fill', color);
    //     });

    //     this.createPageTitle();
    //     this.createBreadcrumbs();
    // }

    // createPageBody(): void {
    //     this._body = this._svg.append('rect')
    //         .attr('x', 250)
    //         .attr('y', 150)
    //         .attr('width', 800)
    //         .attr('height', 500)
    //         .attr('fill', '#fafafa');

    //     this._themeService.background.subscribe(color => {
    //         this._body.attr('fill', color);
    //     });
    // }

    // createLogo(): void {
    //     this._logo = this._svg.append('svg:image')
    //         .attr('x', 60)
    //         .attr('y', 100)
    //         .attr('width', 50)
    //         .attr('height', 40)
    //         .attr('xlink:href', 'https://uxaspects.github.io/UXAspects/assets/img/UX-graphic.png');

    //     this._themeService.logo.subscribe(logo => {
    //         this._logo.attr('xlink:href', logo);
    //     });
    // }

    // createPageTitle(): void {
    //     this._header = this._svg.append('text')
    //         .attr('x', 270)
    //         .attr('y', 130)
    //         .style('font-weight', 200)
    //         .style('font-size', 30)
    //         .text('List View 1');

    //     this._themeService.pages.subscribe(pages => {
    //         this._header.text(this._menuItems.length === 0 ? '' : this._menuItems[0].text.text());
    //     });
    // }

    // createBrand(): void {
    //     this._brand = this._svg.append('text')
    //         .attr('x', 120)
    //         .attr('y', 130)
    //         .attr('width', 50)
    //         .attr('height', 40)
    //         .attr('fill', '#fff')
    //         .text('Brand');

    //     this._themeService.name.subscribe(name => {
    //         this._brand.text(name);
    //     });
    // }

    // createBreadcrumbs(): void {
    //     this._breadcrumb = this._svg.append('text')
    //         .attr('x', 270)
    //         .attr('y', 103)
    //         .style('font-weight', 100)
    //         .style('font-size', 10)
    //         .style('opacity', 0.7)
    //         .text('Breadcrumb');
    // }

    // removeAllMenuItems() {
    //     this._menuItems.forEach(item => {
    //         item.background.remove();
    //         item.indicator.remove();
    //         item.text.remove();
    //     });

    //     this._menuItems = [];
    // }

    // createMenuItem(menu: SideMenuItem, index: number): void {

    //     let x = 50;
    //     let y = 150 + (index * 40);

    //     let background = this._svg.append('rect')
    //         .attr('x', x)
    //         .attr('y', y)
    //         .attr('width', 200)
    //         .attr('height', 40)
    //         .attr('opacity', menu.active ? 0.1 : 0)
    //         .attr('fill', '#000');

    //     let indicator = this._svg.append('rect')
    //         .attr('x', x)
    //         .attr('y', y)
    //         .attr('width', 5)
    //         .attr('height', 40)
    //         .attr('opacity', menu.active ? 1 : 0)
    //         .attr('fill', this._themeService.primary.value);

    //     let text = this._svg.append('text')
    //         .attr('x', x + 25)
    //         .attr('y', y + 25)
    //         .style('font-weight', 100)
    //         .style('font-size', 14)
    //         .attr('fill', '#fff')
    //         .text(menu.text);

    //     this._menuItems.push({
    //         background: background,
    //         indicator: indicator,
    //         text: text
    //     });

    // }

}

export interface SideMenuItem {
    text: string;
    active: boolean;
}

export interface MenuItemElement {
    background: d3.Selection<any, {}, null, null>;
    indicator: d3.Selection<any, {}, null, null>;
    text: d3.Selection<any, {}, null, null>;
}