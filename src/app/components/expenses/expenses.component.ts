import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataElement } from 'src/app/interfaces/data-element';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  // expenses:any;
  dataSource: any;
  displayedColumns: string[] = ["Id", "Description", "IsExpense", "Value", "Action"];
  constructor(private expensesService: ExpensesService, private Dialog: MatDialog) { }

  ngOnInit(): void {
    this.expensesService.getData().subscribe(response => {
      // this.expenses = response
      this.dataSource = new MatTableDataSource<DataElement>(response as DataElement[]);
    });
  }

  editEntry(entry) {
    console.log(entry);
    this.Dialog.open(UpdateEntryComponent, {
      data: {
        id: entry.Id,
        description: entry.Description,
        isExpense: entry.IsExpense,
        value: entry.Value
      },
      minWidth: '30%'
    });
  }

  getExpenses() { }
}
