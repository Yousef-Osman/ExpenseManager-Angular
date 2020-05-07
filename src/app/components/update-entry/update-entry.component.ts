import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpenseType } from 'src/app/interfaces/expenseType';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {
  form:FormGroup;
  types:ExpenseType[] = [
    {value: true, display:'Expense'},
    {value: false, display:'Income'}
  ];

  constructor(private FormBuilder: FormBuilder, 
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private expensesService:ExpensesService,
              private router: Router) { }

  ngOnInit(): void {
    // this.dialogRef.updateSize('50%');
    this.form = this.FormBuilder.group({
      id: [this.data.id, Validators.required],
      description: [this.data.description, Validators.required],
      isExpense: [this.data.isExpense, Validators.required],
      value: [this.data.value, [Validators.required, Validators.pattern('\\d+\\.?\\d*')]]
    });
  }

  onClose(){
    this.dialogRef.close();
  }

  onSave(){
    this.expensesService.addOrUpdateEntry(this.form.value).subscribe(res=>{
      console.log("response is: ", res);
    });
    // this.router.navigate(['/']);
    this.dialogRef.close();
  }
}
