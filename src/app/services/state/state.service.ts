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

    addPage(page: PageData, activate: boolean = false): void {
        let pages = this.pages.getValue();
        pages.push(page);

        this.pages.next(pages);

        if (activate) {
            this.activePage.next(page);
        }
    }

    removePage(page: PageData): void {

        let pages = this.pages.getValue();

        // if this is the only page then we can't remove it
        if (pages.length === 1) {
            return alert('Cannot remove page. There must be at least one page in the project.');
        }

        // remove the current page and broadcast to observers
        this.pages.next(pages.filter(existingPage => existingPage !== page));

        // check if the page being removed is currently active
        if (this.activePage.getValue() === page) {

            // get the first page
            let firstPage = this.pages.getValue()[0];

            // broadcast the change in active page
            this.activePage.next(firstPage);
        }
    }
}

export interface PageData {
    icon: string;
    text: string;
    breadcrumbs: string[];
    layout: PageLayout;
}

export enum PageLayout {
    ListView,
    Dashboard
}