import { Component } from '@angular/core';
import { FundsComponent } from '../funds/funds.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FundsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {}
