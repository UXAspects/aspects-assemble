import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { select, transition, easeLinear } from 'd3';
import { ThemeService, PageData } from '../../services/theme/theme.service';
import { IconSet } from '../../directives/icon/icon.directive';
import { VectorService } from '../../services/vector/vector.service';

// size constants
const VIEWPORT_WIDTH = 1920;
const VIEWPORT_HEIGHT = 982;
const APPLICATION_WIDTH = 1620;
const APPLICATION_HEIGHT = 932;
const SIDE_NAVIGATION_WIDTH = 240;
const SIDE_NAVIGATION_MENU_ITEM_HEIGHT = 50;
const PAGE_HEADER_WIDTH = APPLICATION_WIDTH - SIDE_NAVIGATION_WIDTH;
const PAGE_HEADER_HEIGHT = 122;
const PAGE_CONTENT_WIDTH = PAGE_HEADER_WIDTH;
const PAGE_CONTENT_HEIGHT = APPLICATION_HEIGHT - PAGE_HEADER_HEIGHT;

@Component({
    selector: 'uxa-preview-pane',
    templateUrl: './preview-pane.component.html',
    styleUrls: ['./preview-pane.component.less']
})
export class PreviewPaneComponent {

    @Output() onEditPages: EventEmitter<void> = new EventEmitter<void>();

    private _menuItems: MenuItemElement[] = [];

    constructor(private _elementRef: ElementRef, private _themeService: ThemeService, private _vectorService: VectorService) {
        this.createViewport(select(_elementRef.nativeElement));
    }

    createViewport(parent: Selection): void {
        let viewport = parent.append('svg')
            .attr('viewBox', `0 0 ${VIEWPORT_WIDTH} ${VIEWPORT_HEIGHT}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr('width', '100%')
            .attr('height', '100%')
            .style('filter', 'drop-shadow( 0px 0px 15px #bbb)');

        this.createApplication(viewport);
    }

    createApplication(parent: Selection): void {

        let app = parent.append('svg')
            .attr('x', (VIEWPORT_WIDTH - APPLICATION_WIDTH) / 2)
            .attr('y', (VIEWPORT_HEIGHT - APPLICATION_HEIGHT) / 2)
            .attr('width', APPLICATION_WIDTH)
            .attr('height', APPLICATION_HEIGHT);

        this.createSideNavigation(app);
        this.createPageHeader(app);
        this.createPageBody(app);
    }

    createSideNavigation(parent: Selection): void {

        let sideNavigation = parent.append('svg')
            .attr('width', SIDE_NAVIGATION_WIDTH)
            .attr('height', '100%');

        let sideNavigtionBackground = sideNavigation.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#0C4751');

        let logo = sideNavigation.append('svg:image')
            .attr('x', 28)
            .attr('y', 69)
            .attr('width', 47)
            .attr('height', 47)
            .attr('xlink:href', require('../../assets/img/UX-graphic.png'));

        let brand = sideNavigation.append('text')
            .attr('x', 78)
            .attr('y', 100)
            .attr('fill', '#fff')
            .style('font-weight', 200)
            .style('font-size', '20px')
            .text('UX Aspects');

        sideNavigation.append('g')
            .append(() => IconSet.getIconHtml(IconSet.menu))
            .attr('x', 24)
            .attr('y', 24)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', '#fff');


        this.createSideNavigationMenu(sideNavigation);

        // watch for theme changes
        this._themeService.sideNavigation.subscribe(color => sideNavigtionBackground.attr('fill', color));
        this._themeService.name.subscribe(name => brand.text(name));
        this._themeService.logo.subscribe((filelist: any) => {

            // if the value is no a file list then set to default
            if (!filelist || !(filelist instanceof FileList)) {
                return logo.attr('xlink:href', require('../../assets/img/UX-graphic.png'));
            }

            // if it is a file list then get the image
            let files = filelist as FileList;
            logo.attr('xlink:href', URL.createObjectURL(files.item(0)));
        });
    }

    createSideNavigationMenu(parent: Selection): void {

        let menu = parent.append('svg')
            .attr('class', 'side-menu-item')
            .attr('x', 0)
            .attr('y', PAGE_HEADER_HEIGHT);

        let createBtn = parent.append('svg')
            .attr('x', 15)
            .attr('y', 15 + PAGE_HEADER_HEIGHT + this._themeService.pages.getValue().length * SIDE_NAVIGATION_MENU_ITEM_HEIGHT)
            .attr('width', SIDE_NAVIGATION_WIDTH - 30)
            .attr('height', SIDE_NAVIGATION_MENU_ITEM_HEIGHT - 10);

        let createBtnFillTransition = transition('fillTransition')
            .duration(300)
            .ease(easeLinear);

        let createBtnBackground = createBtn.append('rect')
            .attr('x', 1)
            .attr('y', 1)
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', 'rgba(255, 255, 255, 0.1)')
            .style('cursor', 'pointer')
            .on('mouseenter', () => createBtnBackground.transition('fillTransition').attr('fill', 'rgba(255, 255, 255, 0.2)'))
            .on('mouseleave', () => createBtnBackground.transition('fillTransition').attr('fill', 'rgba(255, 255, 255, 0.1)'))
            .on('click', () => this.onEditPages.emit());

        let createBtnLabel = createBtn.append('text')
            .attr('x', '50%')
            .attr('y', '25')
            .attr('fill', '#fff')
            .attr('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .text('Edit Pages');

        this._themeService.pages.subscribe(pages => {

            // remove all existing page menu items
            menu.selectAll('.side-menu-item').remove();

            // loop through each page and create a new menu item
            pages.forEach((page, idx) => this.createSideNavigationMenuItem(menu, page).attr('y', idx * SIDE_NAVIGATION_MENU_ITEM_HEIGHT));
        });

    }

    createSideNavigationMenuItem(menu: Selection, menuItemData: PageData): Selection {

        let menuItem = menu.append('svg')
            .attr('x', 0)
            .attr('width', '100%')
            .attr('height', SIDE_NAVIGATION_MENU_ITEM_HEIGHT);

        let indicator = menuItem.append('rect')
            .attr('width', 4)
            .attr('height', '100%')
            .attr('fill', this._themeService.primary.getValue());

        let icon = menuItem.append('g')
            .append(() => IconSet.getIconHtml(IconSet[menuItemData.icon]))
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
            .style('font-size', '15px')
            .text(menuItemData.text);

        this._themeService.primary.subscribe(color => indicator.attr('fill', color));

        return menuItem;
    }

    createPageHeader(parent: Selection): void {

        let header = parent.append('svg')
            .attr('x', SIDE_NAVIGATION_WIDTH)
            .attr('width', PAGE_HEADER_WIDTH)
            .attr('height', PAGE_HEADER_HEIGHT);

        let background = header.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fff');

        let title = header.append('text')
            .attr('x', 28)
            .attr('y', 105)
            .style('font-weight', 200)
            .style('font-size', '40px')
            .text('List View 1');

        let breadcrumbs = header.append('text')
            .attr('x', 31)
            .attr('y', 70)
            .style('font-weight', 200)
            .style('font-size', '14px')
            .style('opacity', 0.7)
            .text('List Views');

        this.createPageHeaderMenu(header);

        this._themeService.pageHeader.subscribe(color => background.attr('fill', color));
    }

    createPageBody(parent: Selection): void {

        let body = parent.append('svg')
            .attr('x', SIDE_NAVIGATION_WIDTH)
            .attr('y', PAGE_HEADER_HEIGHT)
            .attr('width', PAGE_CONTENT_WIDTH)
            .attr('height', PAGE_CONTENT_HEIGHT);

        let background = body.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fafafa');

        this._themeService.background.subscribe(color => background.attr('fill', color));

        // Add Sample Page Content
        let table = this._vectorService.createTable()
            .attr('x', 20)
            .attr('y', 20)
            .attr('width', PAGE_CONTENT_WIDTH - 40);

        body.append(() => table.node());

        // Add Pagination Controls
        let pagination = this._vectorService.createPagination(5);
        pagination.attr('x', 20).attr('y', PAGE_CONTENT_HEIGHT - 60);

        body.append(() => pagination.node());
    }

    createPageHeaderMenu(parent: Selection) {

        let container = parent.append('svg')
            .attr('x', PAGE_HEADER_WIDTH - 130)
            .attr('y', 20);

        let search = container.append('g')
            .append(() => IconSet.getIconHtml(IconSet.search))
            .attr('x', '0')
            .attr('y', '0')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#333');

        let notifications = container.append('g')
            .append(() => IconSet.getIconHtml(IconSet.notification))
            .attr('x', '40')
            .attr('y', '0')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#333');

        let settings = container.append('g')
            .append(() => IconSet.getIconHtml(IconSet.actions))
            .attr('x', '80')
            .attr('y', '0')
            .attr('width', '20')
            .attr('height', '20')
            .attr('fill', '#333');

    }
}

export interface SideMenuItem {
    icon: string;
    text: string;
    active: boolean;
}

export interface MenuItemElement {
    background: Selection;
    indicator: Selection;
    text: Selection;
}

export type Selection = d3.Selection<any, {}, null, undefined>;