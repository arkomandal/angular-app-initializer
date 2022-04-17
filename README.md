# AppInit

https://projects.arkomandal.com/angular-app-initializer/dist/


This project uses Angular APP_INITIALIZER to get the prerequisite done to load the application.


This application does a http request at https://api.arkomandal.com/fake-rest/ from APP_INITIALIZER and makes the data available and handy to the app before it is initialized.


Since this is just a prototype it calls a fake rest service. However, in a real application it can be very useful when the application will be needing some data to prepare itself before it loads and gets visible to the end-user such as getting user roles or access privileges.