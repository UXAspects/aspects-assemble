import { Component, ViewChild } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { StateService, PageData, PageLayout } from './services/state/state.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { IconService } from './services/icon/icon.service';
import { ContextMenuService } from './services/context-menu/context-menu.service';
import { PropertiesService } from './services/properties/properties.service';

export var stateServiceInstance: StateService;
export var propertiesServiceInstance: PropertiesService;
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
  submitted: boolean = false;
  layout: string = 'list-view';

  constructor(public stateService: StateService, formBuilder: FormBuilder,
    iconService: IconService, contextMenuService: ContextMenuService, propertiesService: PropertiesService) {

    // make the services a singleton for use within renderables
    stateServiceInstance = stateService;
    propertiesServiceInstance = propertiesService;
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

    this.submitted = true;

    // do nothing if the form is invalid
    if (!valid) {
      return;
    }

    let layout: PageLayout;

    switch (this.layout) {
      
      case 'list-view':
        layout = PageLayout.ListView;
        break;
      
      case 'dashboard':
        layout = PageLayout.Dashboard;
        break;
      
      case 'partition-map':
        layout = PageLayout.PartitionMap;
        break;
    }

    // create the page based on the values provided
    let page: PageData = {
      text: formData.name,
      icon: formData.icon.replace(/-([a-z])/g, (word: string) => word[1].toUpperCase()),
      breadcrumbs: formData.breadcrumbs ? formData.breadcrumbs.split(',').map((crumb: string) => crumb.trim()).filter((crumb: string) => crumb !== '') : [],
      layout: layout
    };

    this.stateService.addPage(page, true);

    // hide the modal
    this.addPageModal.hide();
  }

  onModalClose(): void {
    // reset the form data
    this.submitted = false;
    this.pageForm.reset();
    this.layout = 'list-view';
  }

}

interface CreatePageForm {
  name: string;
  icon: string;
  breadcrumbs: string;
}