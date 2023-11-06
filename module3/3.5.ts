{
  // access modifiers

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.getBalance;
    }
  }

  const goribManuserAccount = new BankAccount(12, "Mr. M", 20);

  //   goribManuserAccount._balance = 0

  goribManuserAccount.addDeposit(200);
  const mybalance = goribManuserAccount.getBalance();
  console.log(mybalance);
  //
}
