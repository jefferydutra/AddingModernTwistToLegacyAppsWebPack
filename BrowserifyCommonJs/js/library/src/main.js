var numberGreaterThanOrEqualTo = require('./numberGreaterThanOrEqualTo');

window.legacy = {};

window.legacy.numberGreaterThanOrEqualTo = function() {
    console.info('numberGreaterThanOrEqualTo(1, 2)', numberGreaterThanOrEqualTo(1, 2));
    console.info('numberGreaterThanOrEqualTo(1, "dd")', numberGreaterThanOrEqualTo(1, 'dd'));
    console.info('numberGreaterThanOrEqualTo(4, 2)', numberGreaterThanOrEqualTo(4, 2));
    console.info('numberGreaterThanOrEqualTo(4, 4)', numberGreaterThanOrEqualTo(4, 4));
    console.info('numberGreaterThanOrEqualTo(NaN, NaN)', numberGreaterThanOrEqualTo(NaN, NaN));
};
