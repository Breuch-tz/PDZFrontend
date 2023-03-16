import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  public createEmail(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    emailTo: String;
  }) {
    this.emailService.onEmailCreate(emailForm).subscribe();
  }
}
