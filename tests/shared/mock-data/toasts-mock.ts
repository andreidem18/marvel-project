import { ToastCompleted } from 'src/app/shared/interfaces/Toast';

export const toastsMock: ToastCompleted[] = [
    {
        id: 1,
        message: 'testing',
        severity: 'success',
        duration: 0.3
    },
    {
        id: 2,
        message: 'testing danger',
        severity: 'danger',
        duration: 0.3
    },
    {
        id: 3,
        message: 'testing warning',
        severity: 'warning',
        duration: 0.3
    },
];
