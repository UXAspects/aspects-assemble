import { Component, ViewChild } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { StateService } from './services/state/state.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { BuilderService } from './services/builder/builder.service';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { IconService } from './services/icon/icon.service';

export var stateServiceInstance: StateService;

@Component({
  selector: 'uxa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild(PreviewPaneComponent) previewPane: PreviewPaneComponent;
  @ViewChild('addPageModal') addPageModal: ModalDirective;

  icons: string[];

  pageForm: any;

  constructor(public stateService: StateService, private _builder: BuilderService, formBuilder: FormBuilder, iconService: IconService) {

      // make the state service a singleton
      stateServiceInstance = stateService;

      this.pageForm = formBuilder.group({
        name: [null, Validators.required],
        icon: [null, Validators.required]
      });

      this.icons = Object.keys(iconService).filter(name => typeof iconService[name] !== 'function').map(name => {
        return name.replace('threeD', '3d').replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
      });
  }

  setColor(subject: BehaviorSubject<String>, value: string): void {
    subject.next(value);
  }

  create() {
    // this._builder.create();
  }

}
