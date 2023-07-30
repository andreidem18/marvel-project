import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputSearchComponent } from './components/input-search/input-search.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ToastComponent } from './components/toast/toast.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    // pipes
    TruncateTextPipe,

    // components
    ConfirmationComponent,
    InputSearchComponent,
    ModalComponent,
    PaginationComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // ComicsModule,
  ],
  exports: [
    // pipes
    TruncateTextPipe,
    
    // components
    ConfirmationComponent,
    InputSearchComponent,
    ModalComponent,
    PaginationComponent,
    ToastComponent,
  ]
})
export class SharedModule { }
