import { BehaviorSubject, throwError } from "rxjs";

export abstract class ApiStub {
  private $state = new BehaviorSubject('');
  private state: any;
  protected happyPath = true;

  public shouldSucceed() {
    this.happyPath = true;
    return this;
  }
  public shouldFail() {
    this.happyPath = false;
    return this;
  }
  protected getState() {
    return this.happyPath 
      ? this.$state.asObservable() 
      : throwError(this.state);
  }
  public setState(state) {
    this.state = state;
    this.$state.next(state);
    return this;
  }
}