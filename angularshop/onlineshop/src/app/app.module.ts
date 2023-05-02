import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ShirtComponent } from './shirt/shirt.component';
import { SizingPipe } from './sizing.pipe';
import { SalutationComponent } from './salutation/salutation.component';
import { GenderPipe } from './gender.pipe';
import { ProductComponent } from './product/product.component';
import { HighlighterDirective } from './highlighter.directive';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import {HttpClientModule} from '@angular/common/http';
import { PhoneComponent } from './phone/phone.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformmoduleComponent } from './reactiveformmodule/reactiveformmodule.component'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShirtComponent,
    SizingPipe,
    SalutationComponent,
    GenderPipe,
    ProductComponent,
    HighlighterDirective,
    ButtonComponent,
    LabelComponent,
    PhoneComponent,
    TemplatedrivenComponent,
    ReactiveformmoduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
