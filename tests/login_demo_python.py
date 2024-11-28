from playwright.sync_api import sync_playwright

def test_demo_login():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        # Navigate to the website
        page.goto('https://demo.applitools.com/')

        # Fill in username and password
        page.fill('input[placeholder="Enter your username"]', 'Tester')
        page.fill('input[placeholder="Enter your password"]', 'Testerovic')

        # Wait for the 'Sign in' button to appear and click it
        page.locator('text=Sign in').wait_for(timeout=5000)
        page.locator('text=Sign in').click()

        # Verify that the 'ACME' link is visible after login
        page.locator('role=link[name="ACME"]').wait_for(state="visible")
        assert page.locator('role=link[name="ACME"]').is_visible()

        # Wait for a couple of seconds before closing
        page.wait_for_timeout(2000)

        # Close the browser
        browser.close()

# Run the test
test_demo_login()
