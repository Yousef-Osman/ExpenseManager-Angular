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
    Description: new FormControl('', Validators.required),
    IsExpense: new FormControl('', Validators.required),
    Value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
  });

  onSubmit(){
    this.expensesService.addEntry(this.elementForm.value).subscribe(res=>{
      console.log("response is: ", res);
    });
  }
}

// export class ExpenseFormComponent implements OnInit {
//   types:ExpenseType[] = [
//     {value: true, display:'Expense'},
//     {value: false, display:'Income'}
//   ];

//   elementForm:FormGroup;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.elementForm = this.formBuilder.group({
//       Description: '',
//       IsExpense: '',
//       Value: ''
//     });
//   }
// }