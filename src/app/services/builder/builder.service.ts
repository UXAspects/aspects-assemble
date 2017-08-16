import { Injectable } from '@angular/core';
import { StateService, PageLayout, PageData } from '../state/state.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { kebabCase } from 'lodash';

@Injectable()
export class BuilderService {

    constructor(private _stateService: StateService) { }

    create() {
        // load all templates
        let context = require.context('../../../../seed', true, /.template$/);
        let templates = context.keys();

        let zip = new JSZip();

        // iterate each template
        templates.forEach(filepath => {

            let path = filepath.split('/').slice(1);
            let file = path.pop().replace('.template', '');

            // determine the final output location
            path.push(file);
            let content = context(filepath);

            zip.file(path.join('/'), content);
        });

        // add some additional files
        let pages = this.createPages();
        let appModule = this.createAppModule(pages);

        zip.file('src/app/app.module.ts', appModule);

        // create side navigation
        let sideNavigation = this.createSideNavigation();

        zip.file('src/app/shared/left-navigation/left-navigation.component.html', sideNavigation);

        // add pages to the zip
        pages.forEach(page => {
            zip.file(this.selectorToComponentPath(page.selector, '.html'), page.template);
            zip.file(this.selectorToComponentPath(page.selector, '.ts'), page.component);

            if (page.stylesheet) {
                zip.file(this.selectorToComponentPath(page.selector, '.less'), page.stylesheet);
            }
        });

        // create stylesheet
        zip.file('src/assets/less/site.less', this.createStylesheet());

        // create the zip file
        zip.generateAsync({ type: 'blob' }).then(blob => saveAs(blob, 'ux-aspects-seed.zip'));
    }

    createAppModule(pageComponents: ComponentPage[]): string {

        // load in the layout
        let layout = require('../../../../seed/src/app/app.module.ts.layout');

        // get the pages in the app
        let pages = this._stateService.pages.getValue();

        // map the pages to routes
        let routes: string[] = pages.map(page => {
            return `{\n  path: '${this.titleToSelector(page.text)}', \n  component: ${this.titleToComponent(page.text)}, \n  data: { \n    title: '${page.text}', \n    breadcrumbs: [ ${page.breadcrumbs.map(crumb => `'${crumb}'`).join(', ')} ] \n    }\n}`;
        });

        // add some default routes
        routes.push(`{ path: '', redirectTo: '/${this.titleToSelector(pages[0].text)}', pathMatch: 'full' }`);
        routes.push(`{ path: '**', component: ${this.titleToComponent(pages[0].text)} }`);

        let imports = pageComponents.map(page => `import { ${page.name} } from './${this.selectorToComponentPath(page.selector).replace('src/app/', '')}';`);
        let declarations = pages.map(page => this.titleToComponent(page.text)).join(',\n\t\t') + ',';

        return layout.replace('${IMPORTS}', imports.join('\n'))
            .replace('${ROUTES}', routes.join(',\n'))
            .replace('${DECLARATIONS}', declarations);
    }

    createPages(): ComponentPage[] {
        return this._stateService.pages.getValue().map(page => {

            switch (page.layout) {

                case PageLayout.ListView:
                    return this.createListView(page);

                case PageLayout.Dashboard:
                    return this.createDashboardView(page);

                case PageLayout.PartitionMap:
                    return this.createPartitionMapView(page);
            }
        });
    }

    createSideNavigation(): string {

        let layout = require('../../../../seed/src/app/shared/left-navigation/left-navigation.component.html.layout');

        let items = this._stateService.pages.getValue().map(page => `
            <li routerLinkActive="active selected">
                <a routerLink="${this.titleToSelector(page.text)}">
                    <i class="hpe-icon hpe-${kebabCase(page.icon)}"></i>
                    <span class="nav-label">${page.text}</span>
                </a>
            </li>`);

        return layout.replace('${TITLE}', this._stateService.brand.getValue())
            .replace('${ITEMS}', items.join('\n\n'));

    }

    createListView(page: PageData): ComponentPage {
        let component: string = require('../../../../seed/src/app/components/list-view/list-view.component.ts.layout');
        let template: string = require('../../../../seed/src/app/components/list-view/list-view.component.html.layout');

        let name = this.titleToComponent(page.text);
        let selector = this.titleToSelector(page.text);

        component = component.replace('${SELECTOR}', selector)
            .replace('${TEMPLATE_FILE_NAME}', `${selector}.component.html`)
            .replace('${COMPONENT_NAME}', name);

        return {
            name: name,
            selector: selector,
            component: component,
            template: template
        };
    }

    createDashboardView(page: PageData): ComponentPage {
        let component: string = require('../../../../seed/src/app/components/dashboard/dashboard.component.ts.layout');
        let template: string = require('../../../../seed/src/app/components/dashboard/dashboard.component.html.layout');
        let stylesheet: string = require('../../../../seed/src/app/components/dashboard/dashboard.component.less.layout');

        let name = this.titleToComponent(page.text);
        let selector = this.titleToSelector(page.text);

        component = component.replace('${SELECTOR}', selector)
            .replace('${TEMPLATE_FILE_NAME}', `${selector}.component.html`)
            .replace('${STYLESHEET_FILE_NAME}', `${selector}.component.less`)
            .replace('${COMPONENT_NAME}', name);

        return {
            name: name,
            selector: selector,
            component: component,
            template: template,
            stylesheet: stylesheet
        };
    }

    createPartitionMapView(page: PageData): ComponentPage {
        let component: string = require('../../../../seed/src/app/components/partition-map/partition-map.component.ts.layout');
        let template: string = require('../../../../seed/src/app/components/partition-map/partition-map.component.html.layout');
        let stylesheet: string = require('../../../../seed/src/app/components/partition-map/partition-map.component.less.layout');

        let name = this.titleToComponent(page.text);
        let selector = this.titleToSelector(page.text);

        component = component.replace('${SELECTOR}', selector)
            .replace('${TEMPLATE_FILE_NAME}', `${selector}.component.html`)
            .replace('${STYLESHEET_FILE_NAME}', `${selector}.component.less`)
            .replace('${COMPONENT_NAME}', name);

        return {
            name: name,
            selector: selector,
            component: component,
            template: template,
            stylesheet: stylesheet
        };
    }

    createStylesheet(): string {
        let stylesheet: string = require('../../../../seed/src/assets/less/site.less.layout');

        let variables = [
            `@primary: ${this._stateService.theme.primary.getValue()};`,
            `@accent: ${this._stateService.theme.accent.getValue()};`,
            `@secondary: ${this._stateService.theme.secondary.getValue()};`,
            `@warning: ${this._stateService.theme.warning.getValue()};`,
            `@alternate1: ${this._stateService.theme.alternate1.getValue()};`,
            `@alternate2: ${this._stateService.theme.alternate2.getValue()};`,
            `@alternate3: ${this._stateService.theme.alternate3.getValue()};`,
            `@text-color: ${this._stateService.theme.textColor.getValue()};`,
            `@body-bg: ${this._stateService.theme.background.getValue()};`,
            `@navbar-side-container-dark: ${this._stateService.theme.sideNavigation.getValue()};`,
            `@navbar-menu-btn-container-bg-dark: ${this._stateService.theme.sideNavigation.getValue()};`,
            `@navbar-bg-light: ${this._stateService.theme.pageHeader.getValue()};`
        ];

        return stylesheet.replace('${VARIABLES}', variables.join('\n'));
    }

    private titleToSelector(title: string): string {
        return title.replace(/ +/g, '-').toLowerCase();
    }

    private titleToComponent(title: string): string {
        return `${title.replace(/\b\w/g, letter => letter.toUpperCase()).replace(/ +/g, '')}Component`;
    }

    private selectorToComponentPath(selector: string, ext: string = ''): string {
        return `src/app/components/${selector}/${selector}.component${ext}`;
    }
}

export interface ComponentPage {
    selector: string;
    name: string;
    component: string;
    template: string;
    stylesheet?: string;
}