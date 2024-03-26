// counterService.js
import { writable } from 'svelte/store';

// Inicialize o contador com um valor inicial
export const counter = writable(15);

// Função para decrementar o contador
export function decrementCounter() {
    counter.update(n => n > 0 ? n - 1 : 0);
}
