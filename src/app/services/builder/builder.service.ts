import { Injectable } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Injectable()
export class BuilderService {

    constructor(private _themeService: ThemeService) { }

    create() {
    }
}