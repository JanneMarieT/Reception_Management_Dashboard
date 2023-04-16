# Reception Management dashboard web app

This is a web app that has a reception management dashboard 
to manage the following:

* Staff member out-of-office logging
* Deliveries tracking

This is a school semester project for WeDeliverTECH

![WeDeliverTECH](/public/images/logo.jpg)

This is the upgraded version of my semester project. The original was only implemented with html/js/css(running in a browser), i am very pleased with that project, it was such a fun assignment i realy enjoyed working on the project and in the end I was rewarded with an A to my delight. 

So I wanted to tweack it and implement all the other experience and knowledge that I know now four months later and make it better.

I added it into a Nodejs plattform so that the project may grow in time, etc. it would be able to store the data in a database. 
* Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

I started with a application generator tool to quickly create an application skeleton.
 - npx express-generator --view=ejs


##### Description
_(starting of first with a simple description - this is what everyone will see/and do on the outside)_

* Staff memeber out-of-office logging
    * Clicking on one of the staff members highlights the row and then clicking on the out button prompts the user for time in minuttes 
        and insert it in table along with expected return time and out time. - also changes status from in to out.
    * Clicking again on the staff member and then on the in button will clear their outtime, duration and expected return time,
        it also updates their status from out to in.
    * When the expected return time is up and the staff member have yet to reurn a toast notification appears on the bottom 
        left on the screen with the staff member picture, name, surname and amount of time he/she has been out for.
    
* Deliveries tracking
    * Driver information will be manualy placed inside input fields in the schedule delivery table
        To proceede it will need a name, surname, telephone number (8 numbers), delivery address and return time.
             vechicle can easily be switched between car and motorcykle when clicking on the input field to vechicle.
    * When input field is filled out correctly clicking the add button will add this delivery to the delivery table.
    * To clear the delivery when the driver return back, click on the driver on the table to highlight this driver and then
        click on the clear button to remove the driver from the table.
    * If the return time is passed and the driver has not yet reurned a toast notification will appear on the bottom left 
        on the screen, with the driver information - name, surname, telephone number, delivery address and return time.

* Navbar is located at the top of the page  - clicking on dashboard will take you "home"
* Clock is located at the bottom right.
    

##### Detailed description
_(then comes the more detailed description for whats also happening in the back)_

* Staff memeber out-of-office logging
    * Staff-table is (for now) populated with 5 random users from an API call to https://randomuser.me
        * This API call gets the random staffmember name, surname, picture and email when starting up the page.
        * Each person is placed into a inheritance class object(Staff_Member) and then placed into an table.
    * OUT BUTTON -  Clicking on the table highlights this persons row and then clicking on the out button will prompt the user for 
        time in minutes. once it gets that it will convert it into hh:mm and place it into the duration column for that person.
        it will then proceede place the out time in the right column and then it will combine these two and place the sum
        in the expected retun time column. it will also change the status from in to out. aswell as update the object in the process.
        This can be done multiple times to one staff member and only the last input time will show in both table and object.
    * IN BUTTON - When staff member return back, click on the staff member in the table and click on in button. this will delete the previous inserted time details and change status from out to in again. it will also empty the staff member objects leaving the fields empty. Toast notification will not show after this since the object has no expected return time.
    * TOAST -(this will only work for a daytime workplace - trouble at midnight) If the staff member has not returned back when the expected return time is up -this is checked every second against the timer - a toast will appear on the bottom left on the screen with the object method (staffMemberIsLate) with picture, name, surname, and duration - headline =  _Staff member is late!_ .
        
* Deliveries tracking
    * INPUT FIELD - On the schedule delivery one must input the delivery driver information it is checked if its validate information
        (that all fields are filled out and the phone number is 8 numbers) if its not it will give out an alert signaling to the user 
        to check its input again. the icon is a simple list giving you several options or two options in this case.
    * ADD BUTTON - Clicking the add button will add this driver to the delivery board table and insert it into an object (Delivery_Driver)
    * CLEAR BUTTON - When the delivery driver has return, click on the table to highlight the driver and then click on the clear table that will clear this table row from the table so this delivery will no longer be visible on the table.
    * TOAST -(this will only work for a daytime workplace - trouble at midnight) When the expected return time is up a toast notification    will show on the bottom screen with the delivery driver class object method - giving the user information about the driver. If there are multiple deliveries comming back at the same time -they will all appear on the same toast with space between them -
    headline = _Delivery driver is late!_
        (also the delivery driver that has been removed from the table will show at this point because it always good to ceep track of where your drivers have been)_(once i figure this out it will be updated!)_

* Clock
    * Clock with current date and time. showed in the format - Day,date,month,year,hour:minute:second.
    - updated every second.

* Navbar (this more for later use in the application)
    * Has a dashboard leading to home when clicked.
    * Inventory and Orders both have submenu (when clicked on) but they are not yet connected to annything.(for next phase)

* The style has been by the company guide lines.
    * Logo is placed on the page - is found on a file named img which is also linked in the html file.
    * font-family consolas was recuested even tho this is a common known in the font family my visual studio decided not to have this.
        (yes im blaming visual studio because i realy dont think im capebol of deleting a font at this point)
        but google is always helpfull. https://fonts.googleapis.com/css?family=Consolas link is included in the html file and will be helping out with that. - wdt_app.css has been given instructions aswell = font-family: consolas, serif;

## Dependencies External libraries or plugins
* dependencies:
    - body-parser: ^1.20.2,
    - cookie-parser: ~1.4.3,
    - debug: ~2.6.0,
    - dotenv: ^16.0.3,
    - ejs: ^3.1.9,
    - express: ^4.18.2,
    - jquery: ^3.6.4,
    - morgan: ^1.10.0,
    - serve-favicon: ^2.5.0

* Bootstrap - yes i used it and included them all in the ejs file. (this part i should redo and implement into dependencies instead)
    * bootstrap fonts are linked in the - head.ejs folder to an external libarary. - (this is the car icon) 
    (and nope they didn't have motorcycles and i thought plains was a bit to much for this type of deliveries)
    * bootstrap js is linked in the - scripts.ejs file - to the folder included in this project. 
    * bootstrap css is linked in the - head.ejs file - to the folder included in this project. 

* font-family (as instructed previously, but I'll write it down again just in case) **plugins**
    * [font-family consolas](https://fonts.googleapis.com/css?family=Consolas) linked in the head.ejs file to an external file.

* fontAwesome (- because i needed a motorcycle and this one was awesome) **plugins**
    * [motorcycle icon](https://kit.fontawesome.com/b57ae05b39.js) added as an link into the head.ejs file to an external file.
    
* jQuery JavaScript Library v3.5.0 (this part i should redo and implement into dependencies instead)
    * this is in an external library in the project - and is linked in the script.ejs.

* Random users
    staff members external library from [random user page]('https://randomuser.me/api/?results=5&inc=picture,name,email&noinfo')
    this is through an api call and is inisialised when page is loaded. - you can find it in staffTable.ejs
    (should proabably redo this part so its in the router file instead)

## Contributing
ME :) Yes me :)
**Signed: Janne Marie Tvetene**
