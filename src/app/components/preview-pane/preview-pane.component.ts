import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { StateService, PageData } from '../../services/state/state.service';
import { Viewport } from '../../renderables/viewport';
import { Page } from '../../renderables/page';
import { VIEWPORT_WIDTH, APPLICATION_WIDTH, VIEWPORT_HEIGHT, APPLICATION_HEIGHT, SIDE_NAVIGATION_WIDTH, PAGE_HEADER_HEIGHT } from '../../renderables/constants';
import { Renderable, VectorElement } from '../../renderables/renderable';
import { SideNavigation } from '../../renderables/side-navigation';
import { PageHeader } from '../../renderables/page-header';
import { Router } from '../../renderables/router';

@Component({
    selector: 'uxa-preview-pane',
    templateUrl: './preview-pane.component.html',
    styleUrls: ['./preview-pane.component.less']
})
export class PreviewPaneComponent {

    @Output() onAddPage: EventEmitter<void> = new EventEmitter<void>();

    private _menuItems: MenuItemElement[] = [];

    constructor(elementRef: ElementRef, private _stateService: StateService) {

        let sideNavigation = new SideNavigation(this._stateService);
        let pageHeader = new PageHeader(this._stateService).attr('x', SIDE_NAVIGATION_WIDTH);
        let router = new Router().attr('x', SIDE_NAVIGATION_WIDTH).attr('y', PAGE_HEADER_HEIGHT);

        let page = new Page(this._stateService)
            .attr('x', (VIEWPORT_WIDTH - APPLICATION_WIDTH) / 2)
            .attr('y', (VIEWPORT_HEIGHT - APPLICATION_HEIGHT) / 2)
            .insert(sideNavigation, pageHeader, router);

        // create viewport
        let viewport = new Viewport().insert(page);

        // add the viewport to the page
        elementRef.nativeElement.appendChild(viewport.getElement());
    }

    // createPageBody(parent: Selection): void {

    //     let body = parent.append('svg')
    //         .attr('x', SIDE_NAVIGATION_WIDTH)
    //         .attr('y', PAGE_HEADER_HEIGHT)
    //         .attr('width', PAGE_CONTENT_WIDTH)
    //         .attr('height', PAGE_CONTENT_HEIGHT);

    //     let background = body.append('rect')
    //         .attr('width', '100%')
    //         .attr('height', '100%')
    //         .attr('fill', '#fafafa');

    //     this._themeService.background.subscribe(color => background.attr('fill', color));

    //     // Add Sample Page Content
    //     let table = this._vectorService.createTable()
    //         .attr('x', 20)
    //         .attr('y', 20)
    //         .attr('width', PAGE_CONTENT_WIDTH - 40);

    //     body.append(() => table.node());

    //     // Add Pagination Controls
    //     let pagination = this._vectorService.createPagination(5);
    //     pagination.attr('x', 20).attr('y', PAGE_CONTENT_HEIGHT - 60);

    //     body.append(() => pagination.node());
    // }


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