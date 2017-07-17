import { Component, ViewChild } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { StateService, PageData, PageLayout } from './services/state/state.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { BuilderService } from './services/builder/builder.service';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { IconService } from './services/icon/icon.service';
import { ContextMenuService } from './services/context-menu/context-menu.service';

export var stateServiceInstance: StateService;
export var contextMenuServiceInstance: ContextMenuService;

@Component({
  selector: 'uxa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild(PreviewPaneComponent) previewPane: PreviewPaneComponent;
  @ViewChild('addPageModal') addPageModal: ModalDirective;

  icons: string[] = [];

  pageForm: FormGroup;
  layout: string = 'list-view';

  constructor(public stateService: StateService, private _builder: BuilderService, formBuilder: FormBuilder,
    iconService: IconService, contextMenuService: ContextMenuService) {

    // make the services a singleton for use within renderables
    stateServiceInstance = stateService;
    contextMenuServiceInstance = contextMenuService;


    this.pageForm = formBuilder.group({
      name: [null, Validators.required],
      icon: [null, Validators.compose([Validators.required, this.iconValidator.bind(this)])],
      breadcrumbs: ['']
    });

    this.icons = Object.keys(iconService).filter(name => typeof iconService[name] !== 'function').map(name => {
      return name.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
    });
  }

  iconValidator(control: AbstractControl): ValidationErrors {
    return this.icons.find(icon => control.value === icon) ? {} : { icon: true };
  }

  createPage(formData: CreatePageForm, valid: boolean): void {

    // do nothing if the form is invalid
    if (!valid) {
      return;
    }

    // create the page based on the values provided
    let page: PageData = {
      text: formData.name,
      icon: formData.icon.replace(/-([a-z])/g, (word: string) => word[1].toUpperCase()),
      breadcrumbs: formData.breadcrumbs ? formData.breadcrumbs.split(',').map((crumb: string) => crumb.trim()).filter((crumb: string) => crumb !== '') : [],
      layout: this.layout === 'list-view' ? PageLayout.ListView : PageLayout.Dashboard
    };

    this.stateService.addPage(page, true);

    // reset the form data
    this.pageForm.reset();
    this.layout = 'list-view';

    // hide the modal
    this.addPageModal.hide();
  }

  setColor(subject: BehaviorSubject<String>, value: string): void {
    subject.next(value);
  }

  create() {
    // this._builder.create();
  }

}

interface CreatePageForm {
  name: string;
  icon: string;
  breadcrumbs: string;
}