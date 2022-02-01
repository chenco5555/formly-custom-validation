import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyRepeatSectionComponent} from '../formly-repeat-section/formly-repeat-section.component';
import {FORMLY_CUSTOM_TYPES} from './formly-custom-types';

@NgModule({
  declarations: [
    AppComponent,
    FormlyRepeatSectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(FORMLY_CUSTOM_TYPES),
    FormlyBootstrapModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
