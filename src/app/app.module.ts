import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { Workshop3Component } from './workshop3/workshop3.component';

@NgModule({
  declarations: [AppComponent, TwoWayDatabindingComponent, NgIfComponent, NgStyleComponent, PropertyBindingComponent, NgClassComponent, Workshop3Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
