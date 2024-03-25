import {  test } from '@playwright/test';
import { chromium, firefox } from 'playwright';


test('about page has expected h1', async () => {
	// const browser = await chromium.launch();

	// await page.goto('/about');

	// await browser.close();

		const browser = await firefox.launch();
		const page = await browser.newPage();
		await page.goto('https://example.com');
		await browser.close();

});