
function SavingsAccount(accountNumber, email, fname, lname) {
  this._accountNumber = accountNumber;
  this._email = email;
  this._firstName = fname;
  this._lastName = lname;
  this.products = [];
  if(accountNumber.length !== 6){
    throw new Error('Account Number must be a 6-digit number');
  }
  let rgx = /.+\@.+\..+/;
  if(!rgx.test(email)){
    throw new Error('Invalid e-mail');
  }
  if(fname.length<3 || fname.length >20){
    throw new Error('First name must be between 3 and 20 characters long');
  }
  if((/\d/.test(lname))){
    throw new Error('Last name must contain english alphabets only');
  }
}

export {
  SavingsAccount,
};
