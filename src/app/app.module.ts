import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { UhrenSchmuckComponent } from './components/products/uhren-schmuck/uhren-schmuck.component';
import { TrauringeComponent } from './components/products/trauringe/trauringe.component';
import { GoldschmiedeComponent } from './components/products/goldschmiede/goldschmiede.component';
import { WerkstattComponent } from './components/products/werkstatt/werkstatt.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    UhrenSchmuckComponent,
    TrauringeComponent,
    GoldschmiedeComponent,
    WerkstattComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
