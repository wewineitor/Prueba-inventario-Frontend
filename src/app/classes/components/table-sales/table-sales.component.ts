import { Component } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-sales',
  templateUrl: './table-sales.component.html',
  styleUrls: ['./table-sales.component.css']
})
export class TableSalesComponent {
  sales: any[]
  constructor(private salesService: SalesService) {

  }

  ngOnInit(): void {
    this.salesService.getData().subscribe((data: any[]) => {
      console.log(data);
      this.sales = data;
    });
  }
}
