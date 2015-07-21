var app = {
    something: false,
    aFunction: function() {
        console.log('this is a function');
    },
    init: function () {
        this.aFunction();
    }
};

app.init();

module.exports = app;