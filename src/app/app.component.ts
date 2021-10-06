import { Component } from '@angular/core';
import { TransactionService } from './core/api/v1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  transactions$ = this.transactionService.get(4048);
  constructor(private transactionService: TransactionService) {
    console.log('we done boiz');
  }
}
