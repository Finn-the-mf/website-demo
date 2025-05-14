function calculatePayment() {
    const debtNeed = parseFloat(document.getElementById("debtNeed").value);
    const debtTime = parseInt(document.getElementById("debtTime").value);
    const productOption = document.getElementById("productOption").value;
    const monthlyPaymentElement = document.getElementById("monthlyPayment");
    
    let annualInterestRate;

    switch (productOption) {
        case "option1": //สินเชื่อนาโนไฟแนนซ์ 33%
        annualInterestRate = 0.33
        break;
        case "option2": //สินเชื่อนาโนไฟแนนซ์ 25%
        annualInterestRate = 0.25
        break;
        case "option3": //สินเชื่อนาโนไฟแนนซ์ 24%
        annualInterestRate = 0.24
        break;
        case "option4": //สินเชื่อนาโนไฟแนนซ์ 24%
        annualInterestRate = 0.24
        break;
        default:
            alert("กรุณาเลือกประเภทสินเชื่อ")
            return;
    }

    const monthlyInterestRate = annualInterestRate / 12;

    //คำนวนค่างวดต่อเดือน
    const a = (1 - (1 / Math.pow(1+monthlyInterestRate,debtTime))) / monthlyInterestRate
    

    if (a === 0) {
        monthlyPaymentElement.textContent = "ไม่สามารถคำนวณได้";
    } else {
        const monthlyPayment = debtNeed / a;
        monthlyPaymentElement.textContent = monthlyPayment.toFixed(2);
    }
}

