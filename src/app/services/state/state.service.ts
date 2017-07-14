import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {

    theme = {
        primary: new BehaviorSubject<string>('#00a7a2'),
        accent: new BehaviorSubject<string>('#7b63a3'),
        secondary: new BehaviorSubject<string>('#fff'),
        alternate1: new BehaviorSubject<string>('#3baa43'),
        alternate2: new BehaviorSubject<string>('#025662'),
        alternate3: new BehaviorSubject<string>('#b08f5c'),
        pageHeader: new BehaviorSubject<string>('#fff'),
        sideNavigation: new BehaviorSubject<string>('#0C4751'),
        background: new BehaviorSubject<string>('#fafafa'),
        textColor: new BehaviorSubject<string>('#676a6c')
    };

    brand = new BehaviorSubject<string>('UX Aspects');
    logo = new BehaviorSubject<string | FileList>(require('../../assets/img/UX-graphic.png'));

    pages = new BehaviorSubject<PageData[]>([{
        icon: 'clone',
        text: 'List View 1',
        breadcrumbs: ['List Views']
    }]);

    constructor() { }
}

export interface PageData {
    icon: string;
    text: string;
    breadcrumbs: string[];
    active?: boolean;
}