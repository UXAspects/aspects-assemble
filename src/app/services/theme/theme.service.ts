import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ThemeService {

    primary = new BehaviorSubject<string>('#00a7a2');
    accent = new BehaviorSubject<string>('#7b63a3');
    secondary = new BehaviorSubject<string>('#fff');
    alternate1 = new BehaviorSubject<string>('#3baa43');
    alternate2 = new BehaviorSubject<string>('#025662');
    alternate3 = new BehaviorSubject<string>('#b08f5c');
    topNavigation = new BehaviorSubject<string>('#fff');
    sideNavigation = new BehaviorSubject<string>('#0C4751');
    background = new BehaviorSubject<string>('#fafafa');

    name = new BehaviorSubject<string>('UX Aspects');
    logo = new BehaviorSubject<string>('https://uxaspects.github.io/UXAspects/assets/img/UX-graphic.png');

    pages = new BehaviorSubject<string[]>(['Page One']);

    constructor() { }
}