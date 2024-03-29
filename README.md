Website: https://practice.automationtesting.in/

## the focus of this automation is to act 100% in web tests, in order to practice and better understand how cypress works in e2e tests


### install and run
```bash
npm install

npm run test
```

All test cases available on the website were used, as follows:
# Test Cases

#### HOME PAGE

##### Home Page - with three Sliders only
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Sliders only.
6) The Home page must contains only three sliders.

##### Home page - with three Arrivals only
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.

##### Home page - Images in Arrivals should navigate
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.

##### Home page - Arrivals-Images-Description
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on Description tab for the book you clicked on.
11) There should be a description regarding that book the user clicked on.

##### Home page - Arrivals-Images-Reviews
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Now clock on Reviews tab for the book you clicked on.
11) There should be a Reviews regarding that book the user clicked on.

##### Home page - Arrivals-Images-Add to Basket	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) User can add a book by clicking on Add To Basket button which adds that book in to his Basket.

##### Home page - Arrivals-Add to Basket with more books
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) User can add a book by clicking on Add To Basket button which adds that book in to his Basket.
13) Select more books than the books in stock.Ex if the stock has 20 books, try to add 21.
14) Click the add to basket button.
15) Now it throws an error prompt like you must enter a value between 1 and 20.

##### Home-Arrivals-Add to Basket-Items
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) User can click on the Item link in menu item after adding the book in to the basket which leads to the check out page.

##### Home-Arrivals-Add to Basket-Items-Coupon	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) User can click on the Item link in menu item after adding the book in to the basket which leads to the check out page.
14) Enter the Coupon code as ‘krishnasakinala’ to get 50rps off on the total.
15) User can able to apply coupon by entering ‘krishnasakinala’ in the coupon textbox which give 50rps off on the total price.

##### Home-Arrivals-Add to Basket-Items-Coupon value<450
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) User can click on the Item link in menu item after adding the book in to the basket which leads to the check out page.
14) Enter the Coupon code as ‘krishnasakinala’ to get 50rps off on the total.
15) User can not able to apply coupon by entering ‘krishnasakinala’ in the coupon textbox which give 50rps off on the total price.
because the coupon is applicable for the book price > 450 rps.

##### Home-Arrivals-Add to Basket-Items-Remove book
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Now click on Remove this icon in Check out page which removes that book from the grid.
14) User has the feasibility to remove the book at the time of check out also.

##### Home-Arrivals-Add to Basket-Items-Add book
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Click on textbox value under quantity in Check out page to add or subtract books.
14) Now after the above change ‘Update Basket’ button will turn into Clickable mode.
15) Now click on Update Basket to reflect those changes.
16) User has the feasibility to Update Basket at the time of check out.

##### Home-Arrivals-Add to Basket-Items-Check-out-Book Final price
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Now User can find the Total price of the book in the Check out grid.
14) User has the feasibility to find the total price of the books at to find the total price of the books at the time of check out.

##### Home-Arrivals-Add to Basket-Items-Check-out-Update Basket	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Click on textbox value under quantity in Check out page to add or subtract books.
14) Now after the above change ‘Update Basket’ button will turn into Clickable mode.
15) Now click on Update Basket to reflect those changes.
16) User has the feasibility to Update Basket at the time of check out.

##### Home-Arrivals-Add to Basket-Items-Check-out-Total & Sub-total condition	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Now user can find total and subtotal values just above the Proceed to Checkout button.
14) The total always < subtotal because taxes are added in the subtotal.
15) Total.

##### Home-Arrivals-Add to Basket-Items-Check-out functionality	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Now user can find total and subtotal values just above the Proceed to Checkout button.
14) The total always < subtotal because taxes are added in the subtotal.
15) Now click on Proceed to Check out button which navigates to payment gateway page.
16) Clicking on Proceed to Checkout button leads to payment gateway page.

##### Home-Arrivals-Add to Basket-Items-Check-out-Payment Gateway	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Now user can find total and subtotal values just above the Proceed to Checkout button.
14) The total always < subtotal because taxes are added in the subtotal
15) Now click on Proceed to Check out button which navigates to payment gateway page.
16) User can view Billing Details,Order Details,Additional details and Payment gateway details.
17) Now user can fill his details in billing details form and can opt any payment in the payment gateway like Direct bank transfer,cheque,cash or paypal.
18) User has the feasibility to add coupon in the payment gateway page and also he can find billing,order and additional details.

##### Home-Arrivals-Add to Basket-Items-Check-out-Payment Gateway-Place order	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Now click on Home menu button.
5) Test whether the Home page has Three Arrivals only.
6) The Home page must contains only three Arrivals.
7) Now click the image in the Arrivals.
8) Test whether it is navigating to next page where the user can add that book into his basket.
9) Image should be clickable and shoul navigate to next page where user can add that book to his basket.
10) Click on the Add To Basket button which adds that book to your basket.
11) User can view that Book in the Menu item with price.
12) Now click on Item link which navigates to proceed to check out page.
13) Now user can find total and subtotal values just above the Proceed to Checkout button.
14) The total always < subtotal because taxes are added in the subtotal.
15) Now click on Proceed to Check out button which navigates to payment gateway page.
16) User can view Billing Details,Order Details,Additional details and Payment gateway details.
17) Now user can fill his details in billing details form and can opt any payment in the payment gateway like Direct bank transfer, cheque, cash or paypal.
18) Now click on Place Order button to complete process
19) On clicking place-order button user completes the process where the page navigates to Order confirmation page with order details, bank details, customer details and billing details.


#### MY ACCOUNT - LOGIN

##### Login with valid username and password.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.

##### Login with incorrect username and incorrect password.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter incorrect username in username textbox.
5) Enter incorrect password in password textbox.
6) Click on login button.
7) Proper error must be displayed(ie Invalid username) and prompt to enter login again.

##### Login with correct username and empty password.
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter valid username in username textbox.
5) Now enter empty password in the password textbox.
6) Click on login button.
7) Proper error must be displayed(ie Invalid password) and prompt to enter login again.

##### Login with empty username and valid password.	
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter empty username in username textbox.
5) Now enter valid password in the password textbox.
6) Click on login button.
7) Proper error must be displayed(ie Invalid username) and prompt to enter login again.

##### Login with empty username and empty password.
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter empty username in username textbox.
5) Now enter valid password in the password textbox.
6) Click on login button.
7) Proper error must be displayed(ie required username) and prompt to enter login again.

##### Login -Password should be masked.
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”
3) Click on My Account Menu.
4) Enter the password field with some characters.
5) The password field should display the characters in asterisks or bullets such that the password is not visible on the screen.

##### Login-Handles case sensitive.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter the case changed username in username textbox.
5) Enter the case chenged password in the password tetxbox.
6) Now click on login button.
7) Login must fail saying incorrect username/password.

##### Login-Authentication.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter the case changed username in username textbox.
5) Enter the case chenged password in the password tetxbox.
6) Now click on login button.
7) Once your are logged in, sign out of the site.
8) Now press back button.
9) User shouldn’t be signed in to his account rather a general webpage must be visible.


#### MY ACCOUNT - REGISTRATION

##### Registration-Sign-in.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered Email Address in Email-Address textbox.
5) Enter your own password in password textbox.
6) Click on Register button.
7) User will be registered successfully and will be navigated to the Home page.

##### Registration with invalid Email-id.
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered Email Address in Email-Address textbox.
5) Enter your own password in password textbox.
6) Click on Register button.
7) User will be registered successfully and will be navigated to the Home page.

##### Registration with empty Email-id.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter empty Email Address in Email-Address textbox.
5) Enter your own password in password textbox.
6) Click on Register button.
7) Registration must fail with a warning message(ie please provide valid email address).

##### Registration with empty password.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter valid Email Address in Email-Address textbox.
5) Enter empty password in password textbox.
6) Click on Register button.
7) Registration must fail with a warning message(ie please enter an account password).

##### Registration with empty Email-id & password.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter empty Email Address in Email-Address textbox.
5) Enter empty password in password textbox.
6) Click on Register button.
7) Registration must fail with a warning message(ie please provide valid email address).

#### SHOP

##### Shop-Filter By Price Functionality.
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Adjust the filter by price between 150 to 450 rps.
5) Now click on Filter button.
6) User can view books only between 150 to 450 rps price.

##### Shop-Product Categories Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click any of the product links available in the product category.
5) Now user can view only that particular product.

##### Shop-Default Sorting Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on Sort by Popularity item in Default sorting dropdown.
5) Now user can view the popular products only.

##### Shop-Default Sorting Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on Sort by Average ratings in Default sorting dropdown.
5) Now user can view the popular products only.

##### Shop-Default Sorting Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on Sort by Newness ratings in Default sorting dropdown.
5) Now user can view the popular products only.

##### Shop-Default Sorting Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on Sort by Low to High Item in Default sorting dropdown.
5) Now user can view the popular products only.

##### Shop-Default Sorting Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on Sort by High to Low Item in Default sorting dropdown.
5) Now user can view the popular products only.

##### Shop-Read More Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on read more button in home page.
5) Read More option indicates the Out Of Stock.
6) User cannot add the product which has read more option as it was out of stock.

##### Shop-Sale Functionality.	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on Sale written product in home page.
5) User can clearly view the actual price with old price striken for the sale written products.

##### Shop-Add to Basket-View Basket Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on the Add To Basket button which adds that book to your basket.
5) User can view that Book in the Menu item with price.
6) Now click on View Basket link which navigates to proceed to check out page.
7) Now user can find total and subtotal values just above the Proceed to Checkout button.
8) The total always < subtotal because taxes are added in the subtotal.
9) Now click on Proceed to Check out button which navigates to payment gateway page.
10) User can view Billing Details, Order Details, Additional details and Payment gateway details.
11) Now user can fill his details in billing details form and can opt any payment in the payment gateway like Direct bank transfer, cheque, cash or paypal.
12) Now click on Place Order button to complete process.
13) On clicking place order button user completes his process where the page navigates to Order confirmation page with order details, bank details, customer details and billing details.

##### Shop-Add to Basket-View Basket through Item link.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on the Add To Basket button which adds that book to your basket.
5) User can view that Book in the Menu item with price.
6) Now click on Item link which navigates to proceed to check out page.
7) Now user can find total and subtotal values just above the Proceed to Checkout button.
8) The total always < subtotal because taxes are added in the subtotal.
9) Now click on Proceed to Check out button which navigates to payment gateway page.
10) User can view Billing Details, Order Details, Additional details and Payment gateway details.
11) Now user can fill his details in billing details form and can opt any payment in the payment gateway like Direct bank transfer, cheque, cash or paypal.
12) Now click on Place Order button to complete process.
13) On clicking place order button user completes his process where the page navigates to Order confirmation page with order details, bank details, customer details and billing details.

##### Shop-Add to Basket-View Basket-Tax Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on Shop Menu.
4) Click on the Add To Basket button which adds that book to your basket.
5) User can view that Book in the Menu item with price .
6) Now click on Item link which navigates to proceed to check out page.
7) Now user can find total and subtotal values just above the Proceed to Checkout button.
8) The total always < subtotal because taxes are added in the subtotal.
9) The tax rate variers for India compared to other countries.
10) Tax rate for indian should be 2% and for abroad it should be 5%.

#### MY ACCOUNT

##### My Accounts-Dashboard
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link which leads to Dashboard.
9) User must view Dashboard of the site.

##### My Accounts-Orders	
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link.
9) Click on Orders link.
10) User must view their orders on clicking orders link.

##### My Accounts-Orders	
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link.
9) Click on Orders link.
10) Click view button.
11) User must view his Order details,customer details and billing details on clicking view button.

##### My Accounts-Orders	
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link.
9) Click on Orders link.
10) Click view button.
11) User must view Order Number Ordered date and Status of the order on clicking view button.

##### My Accounts-Address Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link which leads to Dashboard.
9) Click on Address link.
10) User must view billing address and ship address.

##### My Accounts-Address Functionality.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link.
9) Click on Address link.
10) Click Edit on Shipping Address.
11) User can Edit Shipping address.

##### My Accounts-Account Details.
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on Myaccount link.
9) Click on Account details.
10) User can view account details where he can change his pasword also.

##### My Accounts-Log-Out.
1) Open the browser.
2) Enter the URL “http://practice.automationtesting.in/”.
3) Click on My Account Menu.
4) Enter registered username in username textbox.
5) Enter password in password textbox.
6) Click on login button.
7) User must successfully login to the web page.
8) Click on My Account link.
9) Click on Logout button.
10) On clicking logout,User successfully comes out from the site.
