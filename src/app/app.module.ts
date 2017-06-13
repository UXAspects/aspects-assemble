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

@NgModule({
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesPaneComponent,
    PreviewPaneComponent,
    PropertyBoxComponent
  ],
  providers: [
    ThemeService,
    BuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
