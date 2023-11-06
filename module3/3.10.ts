{
  // access modifiers
  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    private getBalance() {
      return this._balance;
    }
    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.getBalance;
    }
  }

  const goribManuserAccount = new BankAccount(12, "Mir. Gharib", 20);
  //   goribManuserAccount.balance = 0;
  goribManuserAccount.addDeposit(2000);
  const mybalance = goribManuserAccount.getBalance();
  console.log(mybalance);
  goribManuserAccount;
  //
}
