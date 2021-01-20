describe('Calculator', function(){
    var CalculatorPage = require('../Tests/CalculatorPage.js')

    it('Addition', function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

        CalculatorPage.enterFirstNumber('6')
        CalculatorPage.doAddition();
        CalculatorPage.enterSecondNumber('2');
        CalculatorPage.clickSubmitButton();
        CalculatorPage.verifyOutput('8') 

    });

    it('Substraction', function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

        CalculatorPage.enterFirstNumber('6')
        CalculatorPage.doSubstraction();
        CalculatorPage.enterSecondNumber('2');
        CalculatorPage.clickSubmitButton();
        CalculatorPage.verifyOutput('5') 

    });

});