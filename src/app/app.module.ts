import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { UpdateEntryComponent } from './components/update-entry/update-entry.component';

import { ExpensesService } from './services/expenses.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    UpdateEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatSelectModule, MatCardModule, MatInputModule, MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    ExpensesService
  ],
  entryComponents: [UpdateEntryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
