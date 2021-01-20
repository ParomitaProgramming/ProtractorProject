var CalculatorPage = function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var submitButton = element(by.id('gobutton'));
    var outputText = element(by.xpath("//*[@class='ng-binding']"));
    var selection = element(by.model('operator'));

    this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    };

    this.clickSubmitButton = function(){
        submitButton.click();
    };

    this.verifyOutput = function(ExpectedValue){
        expect(outputText.getText()).toEqual(ExpectedValue);
    };

    this.doAddition = function(){
        selection.$('[value="ADDITION"]').click();
    };

    this.doSubstraction = function(){
        selection.$('[value="SUBTRACTION"]').click();
    };

    this.doMultiply = function(){
        selection.$('[value="MULTIPLICATION"]').click();
    };

    this.doDivision = function(){
        selection.$('[value="DIVISION"]').click();
    };

    this.doModulo = function(){
        selection.$('[value="MODULO"]').click();
    };
};

module.exports = new CalculatorPage();