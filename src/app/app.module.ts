import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertiesPaneComponent } from './components/properties-pane/properties-pane.component';
import { PreviewPaneComponent } from './components/preview-pane/preview-pane.component';
import { PropertyBoxComponent } from './components/property-box/property-box.component';
import { ColorPickerModule } from 'angular4-color-picker';
import { ThemeService } from './services/theme/theme.service';
import { BuilderService } from './services/builder/builder.service';
import { ColorInverseDirective } from './directives/color-inverse/color-inverse.directive';
import { IconDirective } from './directives/icon/icon.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VectorService } from './services/vector/vector.service';

@NgModule({
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesPaneComponent,
    PreviewPaneComponent,
    PropertyBoxComponent,
    ColorInverseDirective,
    IconDirective
  ],
  providers: [
    ThemeService,
    BuilderService,
    VectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
