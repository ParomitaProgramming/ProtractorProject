let CalculatorPage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let submitButton = element(by.id('gobutton'));
    let outputText = element(by.xpath("//*[@class='ng-binding']"));

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