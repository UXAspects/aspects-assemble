import { Component, ViewChild } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { BuilderService } from './services/builder/builder.service';

@Component({
  selector: 'uxa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild(PreviewPaneComponent) previewPane: PreviewPaneComponent;

  page: string = '';

  constructor(private _colorPickerService: ColorPickerService, public themeService: ThemeService, private _builder: BuilderService) {

  }

  setColor(subject: BehaviorSubject<String>, value: string): void {
    subject.next(value);
  }

  addPage() {

    if (this.page.trim().length === 0) {
      return;
    }

    let pages = this.themeService.pages.getValue();
    pages.push(this.page);
    this.page = '';
    this.themeService.pages.next(pages);
  }

  removePage(index: number): void {
    let pages = this.themeService.pages.getValue();
    pages.splice(index, 1);
    this.themeService.pages.next(pages);
  }

  create() {
    this._builder.create();
  }

}
