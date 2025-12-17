import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { PriceListComponent } from '../price-list/price-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PriceListComponent, ContactComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
