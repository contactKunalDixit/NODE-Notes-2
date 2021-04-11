/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
// https://catalins.tech.nodejs-express-tutorial-for-2021-getting-started-with-the-javascript-web-server-framework

/*
 *  NodeJS wityh Express is a popular combo used by a l;ot of applications worldwide.
 *  Your server will serve up an HTML page, which will be accessible by other people.
 *  Content that will be covered during this document
 *
 * Node.js
 * Express
 * npm
 * creating Express routes
 * serving HTML
 * setting up static assets in Express
 */

// !:  step 1:  Create and initialise the Project
/*  The first step is to create an empty folder for the project. Either create the usual way oor through terminal through
    *   mkdir express-server
    *   cd express-server


    !: step 2: create package.json by Initialising npm
    *   npm init -y
    The above command creates the pacjage.json file and initialises it with the default values. If you want to fill the fields manually, remove '-y' flag and follw the instructions


    !: step 3: Add Express : You have an intialised Node.js project but there is no track of Express so far. Thus, the next step is to add the "Express" module through npm
    *    npm install express
    You would be able to confirm that Express has been succesfully installed because it'll be auto listed under "dependencies" in package.json.


    !: step 4: Create Express server:
    *   touch index.js
    You need to create the javaScript file for the web server
    Open the file and write the following code:
    *   const express = require("express")
    You import Express in your project so you can use it. Each time you add a package to your project, you need to im[ort it where you want to use it.
    *   const app = express()
    We call the 'express' function, which creates a new application, and then assigns the result to the 'app' constant.


    !: step 5 : creating routes and listening on a specific port:
    In simplest terms, a route represents an endpoint which people can access.
    A route is associated with (1)an HTTP verb (e.g. GET, POST etc), (2) and it takes a URL path, (3) It also takes a callback function which is called when the endpoint is accessed.
    *   app.get('/cat',(req,res)=>{
    *   res.send({message: 'Hello World'})
    *   })

        Therefore, when a person makes a 'GET' request to your page - localhost:3333, the arrow function is called and will display "Hello World"

    !:  step 6 : The last step for the sefver to work is to set up a 'listener'.
        you need to set a specific port for the application. The following code ideally always comes at the end of the application.
    *   app.listen(3333,()=>{
    *   console.log("Application active and listening on port 3333!")
    *   })
    *
    *   You need to call the method 'listen' to be able to start the server.
    *   Also, you can replace the port number (3333) with whatever number you want!

Now that the server is running, you can access it in your browser. Go to http://localhost:3333, and you should see the following message:
{
message: "Hello World"
}

    !   ********************* The above steps till now are sufficiant to start a server and respond something back      ********************************

    *                                                           STATIC ASSETs

   todo:        You may opt for downloading template engines like pug, ejs etc

   todo :       side Imp Step: create directory 'view' (or 'public' as described below) where you can store '.ejs' files. or the static files that have to be served i.e. .html, .css, .js.

   todo: download inbuilt node package 'path' and at the top of your index.js file, do:
   *    const path = require('path)
        The 'path' module allows us to generate absolute paths, which you need to serve static assets. Add the following line of codes(before defining the routes) in your application:

   *     app.use(express.static(path.join(__dirname,'public')))

        'path.join' takes two arguements:
            1.  The current working directory (cwd)
            2.  the second directory, the one we want to join with the cwd



    !:  step 7 : Serve the HTML file:

    The final step is to serve the HTML code. To do that, you have to go to your index.js file, which has your server code. Open the file and add the following code:

   ! app.get('/',(req,res)=>{
   ! res.sendFile(`${__dirname}/public/index.html`)
   ! })


   todo: You might ask whatsup with the method 'sendFile', and why aren't you using the 'render' method. Since you are not using any engine (e.g. Pug, EJS etc), You C A N N O T use the 'render' method. Thus, you send back an HTML file when people access your page.

   todo:        YOU CAN ONLY USE 'render' METHOD ONLY WHEN A TEMPLATE ENGINE IS IN USE, ELSE YOU CAN ONLY 'sendFile' method.

?   Your entire code together should look just like this:
?
?   const path = require('path');
?   const express = require('express');
?   const app = express();
?
?   app.use(express.static(path.join(__dirname, 'public')))
?
?   app.get('/', (req, res) => {
?       res.sendFile(`${__dirname}/public/index.html`);
?   });
?
?   app.listen(3333, () => {
?       console.log('Application listening on port 3333!');
?   });



 */
