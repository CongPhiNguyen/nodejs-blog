const res = require("express/lib/response");

class KurisuController {
    // [GET] /kurisu
    index(req, res){
        res.render('kurisu');
    }
    // [GET] /kurisu/:slug
    show(req, res) {
        res.send('Kurisu detail');
    }

}

module.exports = new KurisuController;