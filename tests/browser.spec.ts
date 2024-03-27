import { expect, test, } from '@playwright/test';
import { BASE_TIMER } from '../src/constants';


test('Test fail scenario with navigation to candidates', async ({ page }) => {
	await page.goto('/');

	const challengeButton = page.getByTestId('challenge-button')

	await challengeButton.click() //start timer

	await page.getByTestId('nav-to-candidates').click();
	
	await page.waitForTimeout((BASE_TIMER - 2) * 1000); //idle for 13 seconds on page /candidates

	await page.getByTestId('nav-to-form').click();

	await page.waitForTimeout(4000); //idle for 4 to wait modal

	const modalMessage = page.getByTestId('modal-message')
	
	expect(await modalMessage.innerHTML()).toBe('Desafio finalizado com falha!'); // check if timeout happens even changing the route
});

test('Test success scenario', async ({ page }) => {
	await page.goto('/');

	const challengeButton = page.getByTestId('challenge-button')

	challengeButton.click() //start timer

	await page.fill('input[name="name"]', 'meu_nome_de_usuario');
	await page.fill('input[name="email"]', 'minha_senha@senha.com');
	await page.fill('input[name="phone"]', '123456789');

	const sendButton = page.getByTestId('send-button')
 
	sendButton.click() // submit fields data

 	await page.waitForTimeout(1000); 

	const modalMessage = page.getByTestId('modal-message')

	expect(await modalMessage.innerHTML()).toBe('Desafio finalizado com sucesso!');

	await page.getByTestId('modal-close-button').click();

	await page.getByTestId('nav-to-candidates').click();
	
	const candidateBoard = page.getByTestId('candidate-board')

	expect(await candidateBoard.innerHTML()).toContain('meu_nome_de_usuario');
	expect(await candidateBoard.innerHTML()).toContain('minha_senha@senha.com');
	expect(await candidateBoard.innerHTML()).toContain('123456789');
})