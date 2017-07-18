import { Injectable } from '@angular/core';

@Injectable()
export class ContextMenuService {

    visible: boolean = false;
    coordinates: ContextMenuCoordinates = { x: 0, y: 0 };
    items: ContextMenuItem[] = [];

    constructor() { }

    show(x: number, y: number, items: ContextMenuItem[]): void {
        this.visible = true;
        this.coordinates = { x: x, y: y };

        this.items = items;
    }

    hide(): void {
        this.visible = false;
    }
}

export interface ContextMenuCoordinates {
    x: number;
    y: number;
}

export interface ContextMenuItem {
    title: string;
    select: () => void;
}