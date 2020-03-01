import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageExampleComponent } from './page-example/page-example.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollWrapperComponent } from './scroll-wrapper/scroll-wrapper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageTryItComponent } from './page-try-it/page-try-it.component';
import { PageStartComponent } from './page-start/page-start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTechnologyComponent } from './page-technology/page-technology.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    PageAboutComponent,
    PageExampleComponent,
    PageSectionComponent,
    FooterComponent,
    ScrollWrapperComponent,
    PageNotFoundComponent,
    PageTryItComponent,
    PageStartComponent,
    PageTechnologyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
