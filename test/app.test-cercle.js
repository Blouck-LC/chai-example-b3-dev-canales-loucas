const Cercle = require('../src/app').Cercle;
const expect = require('chai').expect;

describe('Testing the Cercle Functions', function() {
    it ('1. test périmetre du cercle', function(done) {
        let ce1 = new Cercle(5);
        expect(ce1.getPerimetre()).to.equal(10);
        done();
    });

    it('2. test Surface du cercle', function() {
        let ce2 = new Cercle(6);
        expect(ce2.getSurface()).to.equal(113);
        done();
    });

    it('3. test Air de la sphere du cercle', function() {
        let ce3 = new Cercle(3);
        expect(ce3.getAirSphere()).to.equal(226);
        done();
    });
});