import { writable } from 'svelte/store';

export const timeLeft = writable(15);
export const showModal = writable(false);
export const modalMessage = writable('');
export const showTimer = writable(false);
export const challlengeStarted = writable(false);

export const name = writable('');
export const phone = writable('');
export const email = writable('');

export const candidate = writable({
    name: '',
    phone: '',
    email: ''
});

export function resetTimer() {
    showModal.set(false);
    showTimer.set(false);
    timeLeft.set(15);
}