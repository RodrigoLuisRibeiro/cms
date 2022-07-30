import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header2Component } from './components/header2/header2.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsCreateComponent } from './components/jobs/jobs-create/jobs-create.component';
import { JobsDeleteComponent } from './components/jobs/jobs-delete/jobs-delete.component';
import { JobsUpdateComponent } from './components/jobs/jobs-update/jobs-update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JobsComponent } from './components/views/jobs/jobs.component';
import { HomeComponent } from './components/views/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from'@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { JobsReadComponent } from './components/jobs/jobs-read/jobs-read.component';
import { MatTableModule } from '@angular/material/table'
import { ServicosComponent } from './components/servicos/servicos.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LocalDateTimePipe } from './components/pipe/local-date-time.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    FooterComponent,
    LogoComponent,
    HomeComponent,
    NavComponent,
    JobsComponent,
    JobsCreateComponent,
    JobsDeleteComponent,
    JobsUpdateComponent,
    JobsReadComponent,
    ServicosComponent,
    LocalDateTimePipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
