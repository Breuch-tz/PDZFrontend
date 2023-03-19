import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService {
  public validateStyleName: String = '';
  public validateStyleEmail: String = '';
  public validateStyleMessage: String = '';
  public validateStyleCheckbox: String = '';

  public validateFormError: String = 'validateStyleFormError';

  constructor() {}

  public validateName(eName: String) {
    if (eName == null || eName.length < 3) {
      this.validateStyleName = 'validateStyleInvalid';
      return false;
    }
    this.validateStyleName = 'validateStyleValid';
    return true;
  }

  public validateEmail(eEmail: String) {
    if (eEmail == null || !eEmail.includes('@') || !eEmail.includes('.')) {
      this.validateStyleEmail = 'validateStyleInvalid';
      return false;
    }
    this.validateStyleEmail = 'validateStyleValid';
    return true;
  }

  public validateMessage(eMessage: String) {
    if (eMessage == null || eMessage.length <= 10) {
      this.validateStyleMessage = 'validateStyleInvalid';
      return false;
    }
    this.validateStyleMessage = 'validateStyleValid';
    return true;
  }

  public validateCheckbox(eCheckbox: Boolean) {
    if (eCheckbox == null || eCheckbox == undefined || !eCheckbox) {
      this.validateStyleCheckbox = 'validateStyleInvalidCB';
      return false;
    }
    this.validateStyleCheckbox = 'validateStyleValid';
    return true;
  }

  public validateForm(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eCheckbox: Boolean;
  }) {
    this.validateName(emailForm.eName);
    this.validateEmail(emailForm.eEmail);
    this.validateMessage(emailForm.eMessage);
    this.validateCheckbox(emailForm.eCheckbox);
    if (
      (this.validateName(emailForm.eName) &&
        this.validateEmail(emailForm.eEmail) &&
        this.validateMessage(emailForm.eMessage) &&
        this.validateCheckbox(emailForm.eCheckbox)) == true
    ) {
      this.validateFormError = 'validateStyleFormError';
      return true;
    }
    this.validateFormError = '';
    return false;
  }
}
