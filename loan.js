class LoanManager {
    constructor() {
        this.loanApplications = [];
    }

    
    applyLoan(employeeName, monthlyIncome, accountBalance, loanAmount) {
        let loan = {
            employeeName: employeeName,
            monthlyIncome: monthlyIncome,
            accountBalance: accountBalance,
            loanAmount: loanAmount,
            status: "Pending"
        };
        this.loanApplications.push(loan);
        console.log(`Loan application submitted for ${employeeName}.`);
    }

    
    approveLoan(employeeName) {
        let loan = this.loanApplications.find(loan => loan.employeeName === employeeName && loan.status === "Pending");

        if (loan) {
            
            if (loan.monthlyIncome >= 30000 && loan.accountBalance >= loan.loanAmount) {
                loan.status = "Approved";
                console.log(`Loan for ${employeeName} has been approved.`);
            } else {
                console.log(`Loan for ${employeeName} cannot be approved due to insufficient eligibility.`);
            }
        } else {
            console.log(`No pending loan application found for ${employeeName}.`);
        }
    }

    
    rejectLoan(employeeName) {
        let loan = this.loanApplications.find(loan => loan.employeeName === employeeName && loan.status === "Pending");

        if (loan) {
            loan.status = "Rejected";
            console.log(`Loan for ${employeeName} has been rejected.`);
        } else {
            console.log(`No pending loan application found for ${employeeName}.`);
        }
    }

    
    viewLoanApplications() {
        console.log("Current loan applications:");
        this.loanApplications.forEach(loan => {
            console.log(`${loan.employeeName} - Status: ${loan.status}, Loan Amount: ${loan.loanAmount}`);
        });
    }
}

const loanManager = new LoanManager();

loanManager.applyLoan("Alice", 35000, 40000, 15000);
loanManager.applyLoan("Bob", 25000, 50000, 20000);
loanManager.applyLoan("Charlie", 30000, 25000, 30000);

loanManager.approveLoan("Alice");
loanManager.approveLoan("Bob");
loanManager.rejectLoan("Charlie");

loanManager.viewLoanApplications();
