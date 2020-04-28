import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses:any;
  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
  }

  getExpenses(){
    this.expensesService.getData().subscribe(response=>{this.expenses = response});

  }
}
