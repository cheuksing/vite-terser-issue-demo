class TestClass {
  private _beMangled = 'BE_MANGLE';

  public noMangle = 'SHOULD_NOT_BE_MANGLE';

  private _getPrivateProps = () => {
    console.log('Drop Console not working either');
    return this._beMangled
  };

  public getProps = (x: boolean) => {
    return x ? this.noMangle : this._getPrivateProps()
  }
}

export default TestClass;
