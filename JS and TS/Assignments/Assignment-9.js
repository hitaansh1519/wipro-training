//Question 1

function billSplitter(){
    let totalBill = 2000;
    let numberOfPeople = 4;
    let tipPercent = 10;

    //Task1

    let tipAmt = totalBill*(tipPercent/100);

    const billWithTip = totalBill + tipAmt;

    const individualShare = billWithTip/numberOfPeople;
    console.log(individualShare);

    //Task2

    const totalAfterSpilit = (totalBill/numberOfPeople)*(tipPercent/100) + totalBill/numberOfPeople;
    console.log(totalAfterSpilit);


    //Task3


    /*In the first statement we are converting the tipPercent into decimal and then dividing it with number of people and then multiplying it with the bill amount and then adding with the total bill. We should be using brackets in these type of long calculations as these might give wrong answer in some situations.
    Whereas in second line we are first calculating the tip, then adding it to the bill value and then dividing it among the number of people.*/
}

billSplitter();