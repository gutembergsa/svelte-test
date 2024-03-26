import { expect, test, } from '@playwright/test';

test('Test clicking a button and checking HTML', async ({ page, }) => {
	// Navigate to the page
	await page.goto('/');
	
	const challengeButton = await page.getByTestId('challenge-button')


	challengeButton.click()
	
	// Wait for the page to load after clicking the button
	await page.waitForLoadState('networkidle');
	
	// Get the HTML content of an element after the button click (replace 'elementSelector' with the actual selector of the element you want to check)	
	const timer = await page.getByTestId('timer');
	
	console.log({timer: await timer.innerHTML()});

	

	// Perform assertions on the HTML content
	expect(timer).toBeTruthy(); // Replace 'expectedText' with the text you expect to find in the HTML
	
	// You can also perform other assertions or checks as needed
  });

  test('Test timeout', async ({ page, }) => {
	// Navigate to the page
	await page.goto('/');
	const challengeButton = page.getByTestId('challenge-button')
	challengeButton.click()
	
	// Wait for the page to load after clicking the button

	const timer = page.getByTestId('timer');

	await page.waitForTimeout(10000);

	console.log({timer: await timer.innerHTML()});
  });