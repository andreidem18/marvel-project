import { Injectable } from '@angular/core';
import { Confirmation } from '../../interfaces/Confirmation';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  private _isOpen: boolean = false;

  private defaultConfirmation: Confirmation = {
    action: () => {},
    message: ''
  };
  private _confirmationInfo: Confirmation = this.defaultConfirmation;

  get isOpen() { return this._isOpen }
  get confirmationInfo() { return { ...this._confirmationInfo } }

  constructor() { }

  display(confirmation: Confirmation) {
    this._isOpen = true;
    this._confirmationInfo = {
      ...confirmation,
      action: () => {
        confirmation.action();
        this.close();
      }
    };
  }

  close() {
    this._isOpen = false;
    setTimeout(() => {
      this.clearConfirmation();
    }, 800);
  }

  clearConfirmation() {
    this._confirmationInfo = this.defaultConfirmation;
  }
}
