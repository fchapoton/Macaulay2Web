var m2 = require('./m2server-module.js');
var m2server = m2.M2Server({
    SECURE_CONTAINERS: true,
    MATH_PROGRAM: 'Singular'
});
m2server.listen();

// Local Variables:
// indent-tabs-mode: nil
// tab-width: 4
// End:
