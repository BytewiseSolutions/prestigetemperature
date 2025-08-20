import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  messageStatus = '';

  user_name = '';
  user_phone = '';
  user_email = '';
  user_address = '';
  message = '';

  @ViewChild('contactFormElement') contactFormElement!: ElementRef<HTMLFormElement>;

  sendEmail(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    emailjs.sendForm(
      'service_appistq',
      'template_bl5swzd',
      this.contactFormElement.nativeElement, 
      'IGbiyBQ3uFd8ArL5p'
    ).then(() => {
      this.messageStatus = 'Message sent successfully!';
      form.resetForm();
      this.user_name = '';
      this.user_phone = '';
      this.user_email = '';
      this.user_address = '';
      this.message = '';
      setTimeout(() => this.messageStatus = '', 1500);
    }).catch(() => {
      this.messageStatus = 'Oops! Something went wrong. Please try again.';
      setTimeout(() => this.messageStatus = '', 8000);
    });
  }
}
