var CalculatorPage = function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var submitButton = element(by.id('gobutton'));
    var outputText = element(by.xpath("//*[@class='ng-binding']"));

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
};

module.exports = new CalculatorPage();