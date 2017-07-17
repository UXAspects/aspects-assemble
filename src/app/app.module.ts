import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertiesPaneComponent } from './components/properties-pane/properties-pane.component';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { PropertyBoxComponent } from './components/property-box/property-box.component';
import { ColorPickerModule } from 'angular4-color-picker';
import { StateService } from './services/state/state.service';
import { BuilderService } from './services/builder/builder.service';
import { ColorInverseDirective } from './directives/color-inverse/color-inverse.directive';
import { IconDirective } from './directives/icon/icon.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { IconService } from './services/icon/icon.service';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuService } from './services/context-menu/context-menu.service';
import { OutsideClickDirective } from './directives/outside-click/outside-click.directive';

@NgModule({
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesPaneComponent,
    PreviewPaneComponent,
    PropertyBoxComponent,
    ColorInverseDirective,
    IconDirective,
    ContextMenuComponent,
    OutsideClickDirective
  ],
  providers: [
    StateService,
    BuilderService,
    IconService,
    ContextMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
