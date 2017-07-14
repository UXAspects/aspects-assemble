import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {

    brand = new BehaviorSubject<string>('UX Aspects');
    logo = new BehaviorSubject<string | FileList>(require('../../assets/img/UX-graphic.png'));

    theme = {
        primary: new BehaviorSubject<string>('#00a7a2'),
        accent: new BehaviorSubject<string>('#7b63a3'),
        secondary: new BehaviorSubject<string>('#fff'),
        warning: new BehaviorSubject<string>('#ff454f'),
        alternate1: new BehaviorSubject<string>('#3baa43'),
        alternate2: new BehaviorSubject<string>('#025662'),
        alternate3: new BehaviorSubject<string>('#b08f5c'),
        pageHeader: new BehaviorSubject<string>('#fff'),
        sideNavigation: new BehaviorSubject<string>('#0C4751'),
        background: new BehaviorSubject<string>('#fafafa'),
        textColor: new BehaviorSubject<string>('#676a6c')
    };

    pages: BehaviorSubject<PageData[]>;
    activePage: BehaviorSubject<PageData>;

    constructor() {

        // create a starter page
        let startPage = {
            icon: 'clone',
            text: 'Dashboard',
            breadcrumbs: ['Overview'],
            active: true,
            layout: PageLayout.Dashboard
        };

        this.pages = new BehaviorSubject<PageData[]>([ startPage ]);
        this.activePage = new BehaviorSubject<PageData>(startPage);
    }
}

export interface PageData {
    icon: string;
    text: string;
    breadcrumbs: string[];
    active: boolean;
    layout: PageLayout;
}

export enum PageLayout {
    ListView,
    Dashboard
}