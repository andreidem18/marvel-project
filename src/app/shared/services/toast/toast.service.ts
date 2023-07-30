import { Injectable } from '@angular/core';
import { Toast, ToastCompleted } from '../../interfaces/Toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() {  }

  private _toastsList: ToastCompleted[] = [];

  get toastsList() { return [...this._toastsList] }


  addToast(toast: Toast): ToastCompleted {

    const newToast: ToastCompleted = {
      id: Date.now(),
      ...toast
    }

    this._toastsList.push(newToast);

    setTimeout(() => {
      this.removeToast(newToast.id);
    }, toast.duration * 1000);

    return newToast;
  }


  removeToast(id: number): void {
    this._toastsList = this._toastsList.filter(t => t.id !== id);
  }

  removeAllToasts(): void {
    this._toastsList = [];
  }

}
