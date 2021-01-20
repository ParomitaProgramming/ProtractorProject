describe('Test_Case_1', function(){
    var CalculatorPage = require('../Tests/CalculatorPage.js')
    it('Test_Case_1', function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

        CalculatorPage.enterFirstNumber('6')
        CalculatorPage.enterSecondNumber('2');
        CalculatorPage.clickSubmitButton();
        CalculatorPage.verifyOutput('8')
    });

});