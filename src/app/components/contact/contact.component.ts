import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  public async submit(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eBox: String;
    emailTo: String;
    company: String;
  }) {
    this.emailService.onEmailCreate(emailForm).subscribe();
  }

  public async createEmail(
    emailForm: {
      eName: String;
      eEmail: String;
      eMessage: String;
      eBox: String;
      emailTo: String;
      company: String;
    },
    resetForm: any
  ) {
    await this.submit(emailForm);
    resetForm.resetForm();
  }
}
