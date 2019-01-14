
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'initialPassword',
  });
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
