const kurisuRouter = require('./kurisu')
const siteRouter = require('./site')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    })
    
    app.use('/kurisu', kurisuRouter);
    app.use('/', siteRouter);
}

module.exports = route;
