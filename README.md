# MediMetrics

[View the live project here](http://clacken-ms3.herokuapp.com)

[View the GitHub repository here](https://github.com/clacken-dev/ms3)

![Site Mockup](https://github.com/clacken-dev/ms3/blob/main/documentation/site-mockup.jpg?raw=true)

This is the main website for Medimetrics, an application designed to provide analytics and statistic for the healthcare industry. The targeted users are doctors, nurses and hospital secretaries who will use the site to review patient details, add patients, edit existing patients, delete patients from the system and also view current statistics about the hospital departments and figures. 

## Table of Contents
### 1. User Experience
   - Site Goals
   - User Stories
   - Design
   - Wireframes
### 2. Features
### 3. Database Design
### 4. Technologies Used
   - Languages, Frameworks, Libraries & Programs
### 5. Testing
   - Testing User Stories from UX Section
   - Testing Site Features and Functionality
   - Known Bugs
### 6. Deployment
   - Heroku
### 7. Credits
   - Code
   - Acknowledgements

# User Experience (UX)
## Site Goals
The goal of the site is to provide a consise and intuitive hospital administration application for the healthcare sector. This should be easy to use and easily understandeable by anybody, regardless of technical experience and background. The overall aim of the site is therefore to provide a quality product which will be tried and tested in the industry and thereby gain traction and exposure to further future clients.

* ## User Stories
    * First Time Visitor Goals
        * As a First Time Visitor I want to understand how to sign up and use the service
        * As a First Time Visitor I want to be able to find register easily and enter my details. 
        * As a First Time User I want to find the application to be practical as well as visually appealing with information clearly presented
    

    * Returning Visitor Goals

        * As a Returning Visitor I want to easily be able to login using my existing account
        * As a Returning Visitor I want to view current information about the hospital at which I work
        * As a Returning Visitor I want to view patients currently registered at the hospital at which I'm working
        * As a Returning Visitor I want to edit patients currently registered at the hospital at which I'm working
        * As a Returning Visitor I want to delete patients currently registered at the hospital at which I'm working
        * As a Returning Visitor I want to add patients currently registered at the hospital at which I'm working
        * As a Returning Visitor I want to log out of my account


    * Frequent User Goals
        * As a Frequent User I want to view operational statistics of the hospital at which I work, as well as view and update patient information

* ## Design 
    
    * Colour Scheme
        * The colour scheme used on this site is bright, minimal and relative to a clean hospital environment. Buttons and information are coloured in an intuitive way such as red for delete, blue for information or actions etc.,.
        The design is a practical and straightforward one which is aimed at working professionals who may or may not have technical interests. The design is therefore minimalist and functional so as to clearly present all tasks and options without overwhelming new or basic users. 

    * Typography
         * The typography for this site is also simple and clean and designed to be easily readable and not in any way flashy or decorative. The main design considerations are therefore the sizing of the fonts and the spacing. The font is uniform across the site and Helvetica was chosen as it is a clean and modern font which will be easily readable and in no way distracting from the information itself which is being presented.

    * Imagery
        * The hero image is designed to convey the purpose and use of the site. It does a good job of this and the blue overlay brings out the text and content as well as coordinating with interactive elements across the site. 

   * Icons
       * Icons were added across the site to reinforce the actions assosciated with buttons and elements and to help make navigation more fluid and simplistic for the average user. In this way they can quickly see the purpose of a link or button with a very quick glance without needing to spend large amounts of time processing text, buttons and options. This leads to a very intuitive User Experience and makes use othe site very simple for all users.

* ## Wireframes

The wireframes represent a design which is fairly consistent with the finished product. Small changes were made along the way and the name was updated. The presentation of information is presented in the same manner and with the same pages in existence as seen on the mobile and desktop site. 
The hospital overview page went without a visual representation of the hospital building due to scaling issues on mobile as well as text overlay complications. This design was then changed to individual cards for the separate information areas and these are also clearly presented and easy to read as planned for in the wireframes.

* Wireframe of Desktop and Mobile - [view on github](https://github.com/clacken-dev/ms3/blob/main/documentation/ms3-wireframe.png) (wireframe is horizontal and needs to be scrolled to view in its entirety)


![Wireframe](https://github.com/clacken-dev/ms3/blob/main/documentation/ms3-wireframe.png?raw=true)

 
# Features 
 * Responsive on all device sizes
 * Interactive elements such as hover effects on mouseover
 * Full database interactivity with all CRUD operations implemented
 * Consistently updated statistics provided with every additional changed to the database
 * Login authentication with secure password hashing and password matching
 * Account registration functionality which checks if username already exists in database

# Database Design
![Login](https://github.com/clacken-dev/ms3/blob/main/documentation/database-schema.jpg?raw=true)

### MongoDb 
* The database is a non-relational database designed in MongoDB which is relevant for this project. There are two collections, one which handles Users and their passwords and the other which contains all the patient information. The 'users' collection is populated with the login function which captures the data entered in the registration form. The hashed password is checked against the entered password to validate credentials. Data is stored in the 'patients' collection after being captured from the 'add patient' form. This data is then retrieved as necessary and manipulated in Javascript to provide the analytics for the user. 

# Technologies Used

 ## Languages Used
  * HTML5
  * CSS3
  * Javascript
  * Python

  ## Frameworks, Libraries & Programs Used

1. Material Design for Bootstrap:
   * MDB was used for templating and styling as it provides a nice means of implementing styles and updating classes across elements quickly and easily
2. Font Awesome:
   * Font Awesome was used to add icons across the site for the purpose of creating visual aids for users
3. Git:
   * Git was used for version control of the project and for installing packages for the project, logging into heroku, and creating all necessary files required for Heroku hosting such as Procfile and requirements.txt
4. GitHub:
   * GitHub was used to host the code repository as it was updated in Gitpod and pushed from Git.
5. Balsamiq:
   * Balsamiq was used to create the wireframes during the design process of the project.
6. Photoshop:
   * Photoshop was used to create a project mockup
7. Heroku:
   * Heroku is used to host the live version of the site which was deployed early and then automatically updated from GitHub repository
8. Flask:
    * Flask was used to create the project structure and run the site application. This was used to provide a means of linking front-end and back-and and rendering templates as requested while passing data through to those templates from the database.
9. MongoDB:
   * MongoDB was used to create a non-relational database for the project
10. PyMongo:
   * PyMongo was used to communicate with the Mongo database using python

   # Testing

The W3C Markup Validator and W3C CSS Validator services were used to validate the webpage and ensure there were no errors present. Linting was done on Javascript and Python code to ensure compliance with PEP8 regulations and best practice.

  * W3C Markup Validator - [Results](https://github.com/clacken-dev/ms3/blob/main/documentation/html-validation.png)
  * W3C CSS Validator - [Results](https://github.com/clacken-dev/ms3/blob/main/documentation/css-validator.png). There are no errors for any of my code as all errors present come from Bootstrap and MDB frameworks or libraries
  * [JSLint](https://github.com/clacken-dev/ms3/blob/main/documentation/js-lint.png) was used to check over Javascript and look for issues and errors - no errors present
  * [PEP8 Linter](https://github.com/clacken-dev/ms3/blob/main/documentation/pep8-linter.png) was used to check Python code for any PEP8 compliance issues. All clear was given

## Testing User Stories from User Experience (UX) Section
This section talks about the testing which was undertaken to ensure that the target users of this site could achieve their aims without problems. The testing went through UX fundamentals and interactivity of the site as well as taking into account design features and subtle elements of the site which could be improved to provide the best overall user experience. 

* ## User Stories
    * First Time Visitor Goals


        1. As a First Time Visitor I want to understand how to sign up and use the service
            * A first time user visiting the site will have no problem seeing the two options which are available to them. They will most likely be familiar with login systems and expect to find a registration option if they do not have an account already. They will see the register account option and can click it and be taken to the registration page with no problems.


            ![Login](https://github.com/clacken-dev/ms3/blob/main/documentation/login.png?raw=true)
            The 'not registered' and 'new account' options are clearly visible and their function is clear
        2. As a First Time Visitor I want to be able to find register easily and enter my details. 


             * After clicking on the register link the user will be greeted by a straightforward registration box which has options labelled and whose purpose is clear. 

            ![Login](https://github.com/clacken-dev/ms3/blob/main/documentation/register.png?raw=true)


             Information is clearly laid out for registration and the option is also provided to take them back to the login page if they already have an account. If the username already exists they will be informed of this and will have to choose a new one. 

        3. As a First Time User I want to find the application to be practical as well as visually appealing with information clearly presented
            * A first time user will be taken to the Overview page after logging and will find everything easy to understand from the first time they use the system.

            ![Login](https://github.com/clacken-dev/ms3/blob/main/documentation/overview-page.png?raw=true) 


            The information will be available from the very start after logging in and this provides the user with a dashboard from where they can gather analytical and statistical information about the hospital. The figures are generated as the database is updated and so the information will always be correct for them. 

    


   * Returning Visitor Goals

        1. As a Returning Visitor I want to easily be able to login using my existing account:
            * Users will be able to log in using their username and password by entering them on the login page. They will be informed if their username or password is incorrect but if correct it will log them in and redirect them to the overview page. 
        2. As a Returning Visitor I want to view current information about the hospital at which I work:
            * As soon as the user logs in they will be redirected to the overview page. Here they can view numbers and statistics about the hospital and can scroll down to see the information in its entirety.
        3. As a Returning Visitor I want to view patients currently registered at the hospital at which I'm working:
            * The sidebar is clearly labelled and easy to read and so users will simply click on patients to view existing patients.


            ![Sidebar](https://github.com/clacken-dev/ms3/blob/main/documentation/nav-bar.png?raw=true)


        4. As a Returning Visitor I want to edit patients currently registered at the hospital at which I'm working:
            * Each patient that is displayed has a clearly labelled button below their information for editing that patient. Users click on Edit and are redirected to the edit page where all the current information about the patient is displayed and where they can enter new information and then submit the form. This will update the patient and they will be brought back to the 'Patients' page where they can see all their changes. 

            ![Sidebar](https://github.com/clacken-dev/ms3/blob/main/documentation/edit-delete.png?raw=true)


        5. As a Returning Visitor I want to delete patients currently registered at the hospital at which I'm working:
            * Users wishing to delete a patient will click on the delete button which they will already know exists from having viewed the page and possible using the edit button already. Clicking the delete button will give the users a prompt to make sure they want to delete the patient. They can either cancel the action or proceed and delete the patient. After deleting the patient they will be brought back to the refreshed patient page where they will see their change has taken effect. 
        6. As a Returning Visitor I want to add patients currently registered at the hospital at which I'm working:
            * Users wishing to add a patient will also be familiar with the option from the sidebar. The icon also makes the purpose of the button clear and if they follow the link they will be brought to the 'add patient' page where they can enter all the necessary information into a form. After submitting the form they will be brought back to the 'patients' page and they will see that their patient has been added with all information displaying. 
        7. As a Returning Visitor I want to log out of my account:
            * Users can log out of their account using the logout button located at the top right of the screen. The location is prominent and is commonly found in this area so UX is adherred to here and the option is in no way difficult to find or hidden on another page. 
   


    * Frequent User Goals

        1. As a Frequent User I want to view operational statistics of the hospital at which I work, as well as view and update patient information.
            * A frequent user will be familiar with the site and the operation of it. They will expect to be greeted by the dashboard upon logging in and will have no problem navigating to the different pages for editing and viewing patients. They will be in the habitude of adding, editing and deleting patients and will see everything as they expect to find it due to the logical layout of the site.

### Further Testing

* Testing was carried out across browsers and devices to ensure maximum responsive design and functionality. Friends are family were also sent the link to provide feedback on their devices and talk about their user experience. This and personal experience was there used to improve on the design and the features of the site. 
* Browsers tested on include Chrome, Firefox and Safari on mobile and desktop.
* Devices used included but were not limited to Mac, iPhone 11 & 8, Samsung Galaxy S10

#### Feature Testing
* The site was tested in full across devices and all links, features, buttons and elements were used and interacted with. New features were tested as they were deployed and any bugs and errors were rectified as they appeared. Errors in logic or in app programming resulted in either Heroku or Jinja providing feedback to say the site was no longer operational. This errors were also fixed as they appeared and the site was rigourously tested to ensure it would remain live and that no fatal errors found their way into final production. 

### Known Bugs
* Sometimes at random it appears that the login button doesn't register that it has been clicked however upon pressing it a second time it works. It occurs very rarely and is hard to inspect specifically but it works consistently close to all the time. 


# Deployment 

* The project repository is hosted on GitHub and this is linked to Heroku where it automatically updates with every push to Github. The steps for deploying to Heroku are listed below.

### Forking the GitHub Repository

* If you want to make changes to the repository without altering it, you can make a copy of it by 'Forking' it. This ensures your original repository remains intact.

* Navigate to the relevant GitHub repository:
At the top right corner of the page, select the Fork option.
The repository has now been 'Forked' and you have a copy to work on separately

### Cloning the GitHub Repository

* Cloning the repository will allow a local version of the repository to be worked on by downloading a copy of it. Cloning is good as a backup copy or for working remotely.

* Navigate to the relevant GitHub repository and select the arrow on the Code button.
Copy the link that is shown in the drop-down and select a location in a CLI interface in which the link is to be pasted.
In the terminal the 'git clone' with the link will download a copy of the repository.

### Heroku

* Before deploying to Heroku you will need to prove a requirements.txt file and a Procfile.
This lets Heroku know which packages it needs to install and also how to run the web app. 

* The steps for creating an appliation and deploying to Heroku are as follows:
1. Login or create an account if not already in possesion of same
2. Select New > Create New App  on the home page
3. Select a server and a unique name for the application
4. After creating the app it will need to be linked to a GitHub repository. This is done in the Deploy section of the App
5. Environment variables will need to be provided as they are not committed to Github. This is done in Config Vars section of the settings page. 
6. When all required parameters are added link deploy the app and select automatic deploys from Github. This will build the app and publish and provide a link to the live app. 

## Credits
   ### Code

   * The project is based on the Task Manager project by Code Institute. Functions in app.py are borrowed from this and modified if necessary to suit the project requirements. Some Jinja templating is very similar also but most is adapted as required. Database operations are also based on the Task Manager project as well as the login and authentication features.

   * The page template is from Material Design for Bootstrap and has been adapted and modified as necessary for the project.
   ### Other
   * Any images used were downloaded from Unsplash.com
   * All other images and media for documents folder etc., were created by me.
   
   ## Acknowledgements
   * Friends and family who tested the site features and functionality in order to provide feedback
   * The Code Institute Slack Community
   * My mentor Aaron for advice, feedback and professional assistance

