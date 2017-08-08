import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PropertiesService {

    title: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    properties: BehaviorSubject<ComponentProperty[]> = new BehaviorSubject<ComponentProperty[]>([]);

    setTitle(title: string): void {
        this.title.next(`${title} Properties`);
    }

    setProperties(properties: ComponentProperty[]): void {
        this.properties.next(properties);
    }

    clearProperties(): void {
        this.title.next(null);
        this.properties.next([]);
    }
}

export interface ComponentProperty {
    title: string;
    placeholder?: string;
    type: ComponentPropertyType;
    value: Subject<any>;
}

export enum ComponentPropertyType {
    Number,
    String,
    Color,
    File
}