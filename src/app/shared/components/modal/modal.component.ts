import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-modal-wrapper',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  public isOpen: boolean = true;

  @Output()
  public isOpenChange = new EventEmitter<boolean>();

  close() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

}
