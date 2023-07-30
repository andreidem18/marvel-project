import { Component, inject } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation/confirmation.service';
import { Confirmation } from '../../interfaces/Confirmation';

@Component({
  selector: 'shared-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  private confirmationService = inject(ConfirmationService);

  get confirmation(): Confirmation {
    return this.confirmationService.confirmationInfo;
  }

  get isOpen(): boolean {
    return this.confirmationService.isOpen;
  }

  fireAction() {
    this.confirmation.action();
  }

  close() {
    this.confirmationService.close();
  }

}
