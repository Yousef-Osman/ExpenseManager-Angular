import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataElement } from 'src/app/interfaces/data-element';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  // expenses:any;
  dataSource:any;
  displayedColumns:string[] = ["Id", "Description", "IsExpense", "Value"];
  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.expensesService.getData().subscribe(response=>{
      // this.expenses = response
      this.dataSource = new MatTableDataSource<DataElement>(response as DataElement[]);
    });
  }

  getExpenses(){ }
}
