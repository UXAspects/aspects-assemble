import { Component, OnInit, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';
import { StateService, PageData } from '../../services/state/state.service';
import { VIEWPORT_WIDTH, APPLICATION_WIDTH, VIEWPORT_HEIGHT, APPLICATION_HEIGHT, SIDE_NAVIGATION_WIDTH, PAGE_HEADER_HEIGHT } from '../../renderables/constants';
import { Renderable, VectorElement } from '../../renderables/renderable';
import { SideNavigationControl, PageHeaderControl, RouterControl, PageControl, ViewportControl } from '../../renderables/index';

@Component({
    selector: 'uxa-preview-pane',
    templateUrl: './preview-pane.component.html',
    styleUrls: ['./preview-pane.component.less']
})
export class PreviewPaneComponent {

    @Output() onAddPage: EventEmitter<void> = new EventEmitter<void>();

    private _menuItems: MenuItemElement[] = [];

    constructor(elementRef: ElementRef, private _stateService: StateService) {

        let sideNavigation = new SideNavigationControl(() => this.onAddPage.next());
        let pageHeader = new PageHeaderControl().attr('x', SIDE_NAVIGATION_WIDTH);
        let router = new RouterControl().attr('x', SIDE_NAVIGATION_WIDTH).attr('y', PAGE_HEADER_HEIGHT);

        let page = new PageControl()
            .attr('x', (VIEWPORT_WIDTH - APPLICATION_WIDTH) / 2)
            .attr('y', (VIEWPORT_HEIGHT - APPLICATION_HEIGHT) / 2)
            .insert(sideNavigation, pageHeader, router);

        // create viewport
        let viewport = new ViewportControl().insert(page);

        // add the viewport to the page
        elementRef.nativeElement.appendChild(viewport.getElement());
    }

    // prevent right click menu from appearing
    @HostListener('contextmenu') onContextMenu() {
        return false;
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