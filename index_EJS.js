/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/*
* EJS : Embedded JavaScript is an template engine for content templating.
* There are plenty of other templating engines available like 'pug', or 'nunjacks' etc which do the same job of templating as Javascript

* 'Templating' is just a mechanism through which we provide a template or a pattern to the response we send through the server

*/


const express = require('express');

const app = express();

/*
! STEP 1:

? 1: This is the first ammendment/addition to the file which is same as before (or the notes created in 'NOTES_FirstApp_Express')

* app.set() is needed to define what our default preferred setting will be for templating engine.

* app.set(name,value) is a exclusive method available on object 'app' which accepts 2 arguements. The key and the corresponding value.

* Assigns setting 'name' to 'value'
* You may store any value that you want, But certain names can be used to configure the behaviour of the server. These special names are listed in the 'app settings table'

* app.set() allows you to define settings for your app and helps you define which extensions you'd want to use.
* E.g. calling app.set("foo",true) for a boolean property is same as app.enable("foo").
* Similarly calling app.set("foo",false) for a boolean property is same as app.disable("foo")

 Todo : The above is just an explanation of why app.set() exists.

app.set('view engine', 'ejs');

 * For the template engine setting, we are focussed on using one specific name value pair which is 'view engine' (The default engine extension to use when omitted) and then we specify 'ejs' as our chosen default template engine.

*NOTE: Sub-apps will inherit the value of this setting.

*/

app.set('view engine', 'ejs');

/*
! STEP 2

? NOW we should download the ejs npm module through node

* Now we dont need to specifically 'require' ejs in this file after downloading it through npm. This is because by installing it and setting property -'view'engine' to value -'ejs' , ..express behind  the scenes will require the package ejs which we acquired

! STEP 3

?   MANUALLY Make/ create  directory 'views' as the template 'blueprints' are stored in this directory.
? then, create a file 'home.ejs' (We could name this file anything else).   Take note of the extension used here. It is not the usual 'js' file but instead an 'ejs' file .
? 'ejs' file : In such a file, we can write normal HTML but along with that, we write some extended code which normal html file wont support


! STEP 4

? res.render() :
? Instead of responding with just a one liner or few words through res.send(), we can instead from now on use res.render() which renders the entire response(i.e. helps us send the entire HTML response)  to the client..
*   You CANNOT use both res.send() and res.render()

This is used to render the HTML content (that has been stored in home.ejs) to the client.
*You can mention extension '.ejs' but if you have stated and set the template engine before using app.set()., Then you can do without the extension too.
* We also dont need to mention 'views/home.ejs' because by default the location 'res.render()' searches for is 'views' which it assumes exists already(That is why we created it before at step 3 above)




*/


app.get('/', (req, res) => {
  console.log('This is HOME');
  res.render('home');
});


app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});

// ! *********************************************************

/*
* IMPORTANT ISSUE to take notice of :

*SETTING UP THE VIEW DIRECTORY

* Your home.ejs file is only going to work if you are running the file from within the folder where your "view" directory folder exists

* i.e. If you change your folder and then try running the file from there, the system would not be able to locate the view/home.ejs and thus would give an error

* A solution to this problem is to require another 'path' module from the main global Node itself.
 * and then use the method on it i.e. path.join()

todo: Observe the following steps:
*/

// !Step 1
const path = require('path');

//! Step 2
app.set('views', path.join(__dirname, '/views'));

/*
*  WHat happened above is that '__dirname' represents/points to that path in which the main executable index.js file is located and overrides 'the path from where the file is being executed'
*
and then the method app.join() joins that path and extends it to '/views' folder. Thus in simpler terms, it extends and connects the two paths together to enable the index.js file to access home.ejs file residing in view folder.
todo : This way, you can run the main index.js file from anywhere, even outside the folder, where it resides and still the file would be able to access the home.ejs file and the html content within, and render it thereof.

*/

// ! ******************************************

app.get('/random', (req, res) => {
  const randNum = Math.floor(Math.random() * 10 + 1);
  res.render('random', { rand: randNum, name: 'Kunal' });
});


/*
? Look at the res.render() above. Instead of just mentioning the file name that is to be rendered (as first arguement), it passes second arguement which is an object with a key value pair and the same object which is being passed here would be made automatically available in the file 'random.ejs' which is to be rendered.
!Note: You can have several key value pairs included in this object, all of which would be available to be accessed through the rendered 'random.ejs' file.

? Thus through this you can easily avoid including any calculation in .ejs file and just use the .ejs files exclusively for rendering which is a general good practice

* General thumb of Rule: Ideally templates (or .ejs files) should just be simple and non calculative in nature i.e. should not have any JavaScript snippet. You should NOT put logic to template like adding javascript algorithms, or methods as seen above in <h1>

so as a general practice, we should NOT do that

* TEMPLATES should just be used to pass and display the data. that means use the logic and calculations elsewhere and then just use the .ejs file to pass and display the data to the client

* while naming the objects key value pairs, Another usual practice is to name it as {randNum = randNum}......and then in the random.ejs file, seek randNum and not rand.
 */

// ! Thus, what we saw here was how we can pass on the information through our routes in the index.js files to .ejs instead of keeping calculations within .ejs template files which is a bad practice in general
