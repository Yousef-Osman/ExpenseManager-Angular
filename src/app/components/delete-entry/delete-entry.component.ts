import { Component, OnInit, Inject } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {

  constructor(private expensesService: ExpensesService,
              private dialogRef: MatDialogRef<DeleteEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  onConfirm(){
    this.expensesService.deleteEntry(this.data.id).subscribe(res=>{
      console.log(res);
    });
    this.dialogRef.close();
  }
}
