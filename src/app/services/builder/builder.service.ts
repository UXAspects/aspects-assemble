import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';
import * as JSZip from 'jszip';

@Injectable()
export class BuilderService {

    constructor(private _stateService: StateService) { }

    create() {
        // load all templates
        let context = require.context('../../../../seed', true, /.template$/);
        let templates = context.keys();

        let zip = new JSZip();

        // iterate each template
        templates.map(filepath => {

            let file = filepath.split('/').slice(1).join('/').replace('.template', '');
            let content = context(filepath);

            debugger;
            zip.file(file, content);

        });

        debugger;

    }
}