var app = require('./app.js');

describe("My application", function() {
    beforeEach(function() {
        // this spyOn config allows us to
        // test if aFunction has been called
        spyOn(app, 'aFunction');
    });
    //afterEach(function() {});

    it("should be defined", function() {
        expect(app).toBeDefined();
    });

    it("should equal false", function() {
        expect(app.something).toEqual(false);
    });

    it("should not equal true", function() {
        expect(app.something).not.toEqual(true);
    });

    it("should call aFunction", function() {
        app.init();
        expect(app.aFunction).toHaveBeenCalled();
    });
});