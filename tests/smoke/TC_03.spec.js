import { test, expect } from '@playwright/test';
import HomePage from '../../delta_Page_Object_Model/homePage.js';
import { AdminPage } from '../../delta_Page_Object_Model/adminPage.js';

test.use({ storageState: './StorageState/playwrightStorageState/auth.json' });

test('TC03 - Verify Admin submodules using storage state', async ({ page }) => {
    await page.goto(process.env.URL);

    const homePage = new HomePage(page);
    const adminPage = new AdminPage(page);

    await homePage.adminLink.click();

    await expect(adminPage.userManagementLink).toBeVisible();
    await expect(adminPage.jobLink).toBeVisible();
    await expect(adminPage.organizationLink).toBeVisible();
    await expect(adminPage.qualificationsLink).toBeVisible();
    await expect(adminPage.nationalitiesLink).toBeVisible();
    await expect(adminPage.corporateBrandingLink).toBeVisible();
    await expect(adminPage.configurationLink).toBeVisible();

    


});
