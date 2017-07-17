import { Component, HostListener } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';

@Component({
    selector: 'uxa-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.less'],
    host: {
        '[class.context-menu-visible]': 'contextMenuService.visible',
        '[style.top.px]': 'contextMenuService.coordinates.y',
        '[style.left.px]': 'contextMenuService.coordinates.x'
    }
})
export class ContextMenuComponent {

    constructor(public contextMenuService: ContextMenuService) { }

    @HostListener('window:resize') onResize(): void {
        this.contextMenuService.hide();
    }
}