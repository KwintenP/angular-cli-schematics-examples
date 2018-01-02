import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestesComponent } from './testes/testes.component';
import { TestessComponent } from './testess/testess.component';
import { QsdfComponent } from './qsdf/qsdf.component';
import { QsdfdComponent } from './qsdfd/qsdfd.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestesComponent,
    TestessComponent,
    QsdfComponent,
    QsdfdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
