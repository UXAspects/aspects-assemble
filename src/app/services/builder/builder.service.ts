import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';

@Injectable()
export class BuilderService {

    constructor(private _stateService: StateService) { }

    create() {
    }
}