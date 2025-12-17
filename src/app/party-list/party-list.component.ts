import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriceService } from '../shared/services/price.service';

@Component({
  selector: 'app-party-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.scss'
})
export class PartyListComponent implements OnInit {
pricesService = inject(PriceService);
  prices!: { week: number; weekend: number; copii: string; isMax: boolean; adulti: string; }[];

ngOnInit(): void {
  this.prices = this.pricesService.getPrices();
}
}
