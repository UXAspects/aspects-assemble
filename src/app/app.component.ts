import { Component, ViewChild } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { BuilderService } from './services/builder/builder.service';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'uxa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild(PreviewPaneComponent) previewPane: PreviewPaneComponent;
  @ViewChild('editPagesModal') editPagesModal: ModalDirective;

  constructor(
    private _colorPickerService: ColorPickerService,
    public themeService: ThemeService,
    private _builder: BuilderService) {

  }

  setColor(subject: BehaviorSubject<String>, value: string): void {
    subject.next(value);
  }

  editPages() {
    this.editPagesModal.show();
  }

  create() {
    // this._builder.create();
  }

}
