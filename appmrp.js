const express = require('express'); //call express package (allows you to write multipage web applications)
const mongoose = require('mongoose');
// express app

const app = express(); //invoking express function to create an instance of an express app
                       // and storing it in a constant
//Connect to ongodb
const dbURI = 'mongodb+srv://mbrima:Regular878!@cluster0.kxv5jqn.mongodb.net/MyResumeProject?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

//listen for requests (port 3000 which infers that we want touse 'localhost')
 //returns us an instance of the server

app.get('/mrp', (req, res) => {
    //res.send('<p>Home Page</p>');
    res.sendFile('./Michael Brima - Resume Project.html', { root: __dirname}); //second arguement is used to get us the current directory 
                                                            //that file is in since path is not absolute path but a relative path (dosent have full path listed)
} ); //.get() method is used to listen for get requests

app.get('https://my-resume-project-one.vercel.app/ROLEACCOUNTSPAYABLECLERK', (req, res) => {
    res.sendFile('ROLEACCOUNTSPAYABLECLERK.html');
});

app.get('/ROLEDATAENTRYCLERK1', (req, res) => {
    res.sendFile('./ROLEDATAENTRYCLERK1.html', {root: __dirname});
});

app.get('/ROLEACCOUNTINGCLERK', (req, res) => {
    res.sendFile('./ROLEACCOUNTINGCLERK.html', {root: __dirname});
});

app.get('/ROLEDATAENTRYCLERK2', (req, res) => {
    res.sendFile('./ROLEDATAENTRYCLERK2.html', {root: __dirname});
});

app.get('/ROLEBOOKKEEPER', (req, res) => {
    res.sendFile('./ROLEBOOKKEEPER.html', {root: __dirname});
});

app.get('/ROLEBILLINGSPECIALIST', (req, res) => {
    res.sendFile('./ROLEBILLINGSPECIALIST.html', {root:__dirname});
});

app.get('/ROLEBSPECIALIST&BOASSOCIATE', (req, res) => {
    res.sendFile('./ROLEBSPECIALIST&BOASSOCIATE.html', {root:__dirname});
});

//Skills

app.get('/DATAENTRYCLERK1SKILLS', (req, res) => {
    res.sendFile('./DATAENTRYCLERK1SKILLS.html', {root:__dirname});
});

app.get('/BOOKKEEPERSKILLS', (req, res) => {
    res.sendFile('./BOOKKEEPERSKILLS.html', {root:__dirname});
});

app.get('/DATAENTRYCLERK2SKILLS', (req, res) => {
    res.sendFile('./DATAENTRYCLERK2SKILLS.html', {root:__dirname});
});

app.get('/ACCOUNTINGCLERKSKILLS', (req, res) => {
    res.sendFile('./ACCOUNTINGCLERKSKILLS.html', {root:__dirname});
});

app.get('/BS&BOASKILLS', (req, res) => {
    res.sendFile('./BS&BOASKILLS.html', {root:__dirname});
});

app.get('/BS2SKILLS', (req, res) => {
    res.sendFile('./BS2SKILLS.html', {root:__dirname});
});

app.get('/ACCOUNTSPAYABLECLERKSKILLS', (req, res) => {
    res.sendFile('./ACCOUNTSPAYABLECLERKSKILLS.html', {root:__dirname});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { root: __dirname}); //second arguement is used to get us the current directory 
    //that file is in since path is not absolute path but a relative path (dosent have full path listed)
} ); //.get() method is used to listen for get requests

// Redirects:
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 Page:
app.use((req, res) => { //use function fires for all requests coming in but only if request reaches this point in code (if there is no match in url request)
                        //Must be the last option in terms of requests as this will be last resort for all other urls that do not match)
    res.status(404).sendFile('./views/404.html', { root: __dirname});
    //status(404) method will identify option as actual error
})
