const express = require("express");
const path = require("path"); 
const app = express();
const bodyparser = require('body-parser')

var port = process.env.PORT || 8000;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/about', (req, res)=>{ 
    const params = { }
    res.status(200).render('about.pug', params);
})
app.get('/Experiences', (req, res)=>{ 
    const params = { }
    res.status(200).render('Experiences.pug', params);
})
app.get('/Projects', (req, res)=>{ 
    const params = { }
    res.status(200).render('Projects.pug', params);
})
app.get('/TechnicalBackground', (req, res)=>{ 
    const params = { }
    res.status(200).render('TechnicalBackground.pug', params);
})
app.get('/Resume', (req, res)=>{ 
    const params = { }
    res.status(200).render('Resume.pug', params);
})
app.get('/ContactMe', (req, res)=>{ 
    const params = { }
    res.status(200).render('ContactMe.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});