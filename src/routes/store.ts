import { BASE_TIMER } from '../constants';
import type { Candidate, Data } from '$lib/types';
import { writable } from 'svelte/store';

export const timeLeft = writable(BASE_TIMER);
export const showModal = writable(false);
export const modalMessage = writable('');
export const showTimer = writable(false);
export const challlengeStarted = writable(false);
export const intervalId = writable<number>();
export const candidate = writable<Candidate>({
    name: '',
    phone: '',
    email: ''
});

let intervalIdValue: number
intervalId.subscribe(value => {
    intervalIdValue = value
})

export function helperToClearInterval(trigger: boolean) {
    if (trigger === true) {
        timeLeft.set(BASE_TIMER);
    }
    showModal.set(!trigger);
    showTimer.set(trigger);
    challlengeStarted.set(trigger);
    clearInterval(intervalIdValue);
}

export const formFeedback = writable<Data>({
    success: false,
    errors: {}
});

export function decrementCounter() {
    timeLeft.update(n => n > 0 ? n - 1 : 0);
}