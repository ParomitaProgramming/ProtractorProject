
describe('Test_Case_1', function(){
    var CalculatorPage = require('../Tests/CalculatorPage.js')
    it('Test_Case_1', function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

        CalculatorPage.enterFirstNumber('3')
        CalculatorPage.enterSecondNumber('5');
        CalculatorPage.clickSubmitButton();
        CalculatorPage.verifyOutput('8')
    });

});