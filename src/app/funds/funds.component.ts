import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-funds-content',
  standalone: true,
  imports: [],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Romania Start Up Plus</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img src="assets/fonduri.jpg" alt="Fonduri Europene" style="max-width: 100%;" />
    </div>
  `,
})
export class FundsContent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-funds',
  standalone: true,
  imports: [],
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.scss'
})
export class FundsComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.open(FundsContent, {
      centered: true,
      size: 'xl',
      scrollable: true,
    });
  }
}
