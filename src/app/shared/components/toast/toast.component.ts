import { Component, OnInit, inject } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';
import { ToastCompleted } from '../../interfaces/Toast';

@Component({
  selector: 'shared-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  private toastService = inject(ToastService);

  get toastsList(): ToastCompleted[] {
    return this.toastService.toastsList;
  }


}
