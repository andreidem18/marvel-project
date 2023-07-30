export interface ToastCompleted {
    id:       number;
    message:  string;
    severity: severity;
    duration: number;
}

export type severity = 'success' | 'danger' | 'warning';

export interface Toast {
    message:  string;
    severity: severity;
    duration: number;
}
