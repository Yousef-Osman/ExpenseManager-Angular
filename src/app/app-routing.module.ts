import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', component: ExpensesComponent},
  {path:'entries', component: ExpensesComponent},
  {path:'new-entry', component: AddEntryComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
