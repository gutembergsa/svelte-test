import { expect, test, } from '@playwright/test';

test('Test clicking a button and checking HTML', async ({ page, }) => {
	// Navigate to the page
	await page.goto('/');
	
	const element =  await page.getByText('doispo')

	console.log({element});
	
	// // Click the button (replace 'buttonSelector' with the actual selector of the button)
	// await page.click('buttonSelector');
	// await page.getByText('Iniciar Desafio').click();

	// // Wait for the page to load after clicking the button
	// await page.waitForLoadState('networkidle');
	

	
	// // Get the HTML content of an element after the button click (replace 'elementSelector' with the actual selector of the element you want to check)
	// const htmlContent = await page.getByText('Tempo restante:');
  
	// // Perform assertions on the HTML content
	// expect(htmlContent).toBeTruthy(); // Replace 'expectedText' with the text you expect to find in the HTML
	
	// // You can also perform other assertions or checks as needed
  });