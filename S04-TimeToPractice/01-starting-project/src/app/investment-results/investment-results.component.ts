import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService: InvestmentService;

  constructor(investmentService: InvestmentService) {
    this.investmentService = investmentService;
  }

  get results(){
    return this.investmentService.resultsData;
  }

}