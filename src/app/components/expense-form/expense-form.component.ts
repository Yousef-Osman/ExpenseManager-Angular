import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpenseType } from 'src/app/interfaces/expenseType';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {
  types:ExpenseType[] = [
    {value: true, display:'Expense'},
    {value: false, display:'Income'}
  ];

  constructor(private expensesService:ExpensesService) { }

  elementForm = new FormGroup({
    description: new FormControl('', Validators.required),
    isExpense: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
  });

  onSubmit(){
    this.expensesService.addOrUpdateEntry(this.elementForm.value).subscribe(res=>{
      console.log("response is: ", res);
    });
  }
}
