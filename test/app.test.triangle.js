const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the triangle Functions',function(){
    it('1. The side lenght of the Triangle', function(done){
        let t1 = new Triangle(2,2,2);
        expect(t1.getSideLengthRight()).to.equal(2);
        expect(t1.getSideLengthLeft()).to.equal(2);
        expect(t1.getSideLengthBase()).to.equal(2);
        done();
    });

    it('2. Le Triangle est Equilateral', function(done){
        let t2 = new Triangle(5,5,5);
        expect(t2.getTypeOfTriangle()).to.equal("Equilateral");
        done();
    });

    it('3. Le Triangle est Isosceles', function(done){
        let t3 = new Triangle(3,3,4);
        expect(t3.getTypeOfTriangle()).to.equal("Isosceles");
        done();
    });

    it('4. Le Triangle est Triangle_quelconque', function(done){
        let t4 = new Triangle(5,6,3);
        expect(t4.getTypeOfTriangle()).to.equal("Triangle_quelconque");
        done();
    });

    it('5. La surface du triangle', function(done) {
        let t5 = new Triangle(3,3,3);
        expect(t5.getSurfaceAreaT()).to.equal(3.9);
        done();
    });

});