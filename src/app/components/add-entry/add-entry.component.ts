import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpenseType } from 'src/app/interfaces/expenseType';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent {
  types:ExpenseType[] = [
    {value: true, display:'Expense'},
    {value: false, display:'Income'}
  ];

  constructor(private expensesService:ExpensesService,
              private router:Router) { }

  elementForm = new FormGroup({
    description: new FormControl('', Validators.required),
    isExpense: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
  });

  onSubmit(){
    this.expensesService.addOrUpdateEntry(this.elementForm.value).subscribe(res=>{
      console.log("response is: ", res);
    });
    this.router.navigate(['/']);
  }
}
