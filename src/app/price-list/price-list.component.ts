import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriceService } from '../shared/services/price.service';

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.scss'
})
export class PriceListComponent implements OnInit {
  priceService = inject(PriceService);
  prices!: { week: number; weekend: number; copii: string; isMax: boolean; adulti: string; }[];

  ngOnInit(): void {
    this.prices = this.priceService.getPrices();
  }
}
