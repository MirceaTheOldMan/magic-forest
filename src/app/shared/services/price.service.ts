import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  getPrices() {
    return prices;
  }
}

const prices = [
  {
    week: 1199,
    weekend: 1499,
    copii: '10',
    isMax: false,
    adulti: '20',
  },
  {
    week: 1599,
    weekend: 1799,
    copii: '10',
    isMax: true,
    adulti: '20',
  },
  {
    week: 1399,
    weekend: 1699,
    copii: '15',
    isMax: true,
    adulti: '25',
  },
  {
    week: 2199,
    weekend: 2599,
    copii: '20',
    isMax: true,
    adulti: '30',
  },
  {
    week: 2499,
    weekend: 2899,
    copii: '25',
    isMax: true,
    adulti: '40',
  },
  {
    week: 3199,
    weekend: 3899,
    copii: '30',
    isMax: true,
    adulti: '40',
  },
];
