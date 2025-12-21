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
    week: 1200,
    weekend: 1500,
    copii: '10',
    isMax: false,
    adulti: '20',
  },
  {
    week: 1600,
    weekend: 1800,
    copii: '10',
    isMax: true,
    adulti: '20',
  },
  {
    week: 1400,
    weekend: 1700,
    copii: '15',
    isMax: true,
    adulti: '25',
  },
  {
    week: 2200,
    weekend: 2600,
    copii: '20',
    isMax: true,
    adulti: '30',
  },
  {
    week: 2500,
    weekend: 2900,
    copii: '25',
    isMax: true,
    adulti: '40',
  }
];
