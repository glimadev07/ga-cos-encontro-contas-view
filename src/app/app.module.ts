import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../src/app/shared/routes/app-routing.module';
import { AppComponent } from './app.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CosseguroModule } from './modules/cosseguro/cosseguro.module';
import { HomeModule } from './modules/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CosseguroModule,
    HomeModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
