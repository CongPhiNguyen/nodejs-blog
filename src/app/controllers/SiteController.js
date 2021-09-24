const res = require("express/lib/response");

class SiteController {
    index(req, res){
        res.render('komi');
    }
    komi(req, res) {
        res.render('komi');
    }
    // app.post('/komi', (req, res) => {
    //     console.log(req.body);
    //     res.render('komi');
    // })
}

module.exports = new SiteController;