import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'secondary',
    message:
      'Site-ul magicforest.ro nu colectează date cu caracter personal, dar folosește cookie-uri de la Google și Facebook.',
  },
];

@Component({
  selector: 'app-gdpr',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './gdpr.component.html',
  styleUrl: './gdpr.component.scss'
})
export class GdprComponent {
  alerts!: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
