{
  // getter and setter

  class BanckAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    //  public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }

    // setter

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // public  getBalance(){
    //       return this._balance
    //   }

    //getter

    get balance() {
      return this._balance;
    }
  }

  // class StudentAccount extends BankAccount{
  //  test(){
  //   this.getBalance
  //  }
  // }

  const goribManuserAccount = new BanckAccount(12, "Mri. Gharid", 20);
  //   goribManuserAccount.balance = 0;
  //     goribManuserAccount.addDeposit(2000);

  goribManuserAccount.deposit = 500;
  const myBalance = goribManuserAccount.balance;
  console.log(myBalance);

  //
}
