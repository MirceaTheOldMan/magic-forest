import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PriceService } from '../shared/services/price.service';

interface FeatureLink {
  text: string;
  routerLink?: string;
  fragment?: string;
}

interface Feature {
  text: string;
  link?: FeatureLink;
  text2?: string;
}

interface Package {
  id: string;
  title: string;
  colorClass: string;
  textClass: string;
  priceIndex: number;
  adultExtraFee: number;
  childExtraFee: number;
  features: (string | Feature)[];
}

@Component({
  selector: 'app-party-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.scss'
})
export class PartyListComponent implements OnInit {
  pricesService = inject(PriceService);
  prices!: { week: number; weekend: number; copii: string; isMax: boolean; adulti: string; }[];
  
  packages: Package[] = [
    {
      id: 'rent1',
      title: 'Închiriere 1',
      colorClass: 'bg-warning',
      textClass: '',
      priceIndex: 0,
      adultExtraFee: 20,
      childExtraFee: 75,
      features: []
    },
    {
      id: 'rent2',
      title: 'Închiriere 2',
      colorClass: 'bg-primary',
      textClass: 'text-white',
      priceIndex: 1,
      adultExtraFee: 20,
      childExtraFee: 100,
      features: [
        {
          text: 'Pizza pentru copii - 4 pizza medii',
          link: { text: '(3)', routerLink: '/party-list', fragment: 'explicatie' },
          text2: '(se achită direct la livrator - 140 lei)',
        },
        'O șampanie pentru copii',
        'Suc necarbogazos pentru copii - 4 litri',
        'Ronțănele pentru copii',
      ]
    },
    {
      id: 'rent3',
      title: 'Închiriere 3',
      colorClass: 'bg-success',
      textClass: 'text-white',
      priceIndex: 2,
      adultExtraFee: 20,
      childExtraFee: 75,
      features: []
    },
    {
      id: 'rent4',
      title: 'Închiriere 4',
      colorClass: 'bg-primary',
      textClass: 'text-white',
      priceIndex: 3,
      adultExtraFee: 20,
      childExtraFee: 100,
      features: [
        {
          text: 'Pizza pentru copii - 8 bucăți',
          link: { text: '(3)', routerLink: '/party-list', fragment: 'explicatie' },
          text2: '(se achită direct la livrator - 260 lei)',
        },
        'Șampanie pentru copii - 2 bucăți',
        'Suc necarbogazos pentru copii - 8 litri',
        'Ronțănele pentru copii',
      ]
    },
    {
      id: 'rent5',
      title: 'Închiriere 5',
      colorClass: 'bg-warning',
      textClass: '',
      priceIndex: 4,
      adultExtraFee: 20,
      childExtraFee: 100,
      features: [
        {
          text: 'Pizza pentru copii - 10 bucăți',
          link: { text: '(3)', routerLink: '/party-list', fragment: 'explicatie' },
          text2: '(se achită direct la livrator - 320 lei)',
        },
        'Șampanie pentru copii - 2 bucăți',
        'Suc necarbogazos pentru copii - 10 litri',
        'Ronțănele pentru copii',
      ]
    }
  ];

  ngOnInit(): void {
    this.prices = this.pricesService.getPrices();
  }

  isFeatureObject(feature: string | Feature): feature is Feature {
    return typeof feature === 'object' && 'text' in feature;
  }
}
