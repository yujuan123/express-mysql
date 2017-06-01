/**
 * Created by yujuan on 17-6-1.
 */


var regRouter = function(app){

 app.use('/employees', require('./employees'));
 app.use('/movies', require('./movies'));
 app.use('/signs', require('./signs'));
 app.use('/studios', require('./studios'));
 app.use('/users', require('./users'));
};

module.exports = regRouter;