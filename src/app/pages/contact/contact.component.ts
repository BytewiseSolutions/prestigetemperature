import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContactComponent {
  messageStatus: string = '';

  // Bindable form fields
  user_name: string = '';
  user_phone: string = '';
  user_email: string = '';
  user_address: string = '';
  message: string = '';

  sendEmail(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Add current time to the form
    const timeField = document.createElement('input');
    timeField.type  = 'hidden';
    timeField.name  = 'time';
    timeField.value = new Date().toLocaleString();
    form.appendChild(timeField);

    // Force values into the form fields
    (form.querySelector('input[name="user_name"]')  as HTMLInputElement).value = this.user_name;
    (form.querySelector('input[name="user_phone"]') as HTMLInputElement).value = this.user_phone;
    (form.querySelector('input[name="user_email"]') as HTMLInputElement).value = this.user_email;
    (form.querySelector('input[name="user_address"]') as HTMLInputElement).value = this.user_address;
    (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement).value = this.message;

    emailjs.sendForm(
      'service_appistq',
      'template_bl5swzd',
      form,
      'IGbiyBQ3uFd8ArL5p'
    ).then(() => {
      this.messageStatus = 'Message sent successfully!';

      // Reset **after** a short delay so EmailJS reads correct values
      setTimeout(() => {
        form.reset();
        this.user_name    = '';
        this.user_phone   = '';
        this.user_email   = '';
        this.user_address = '';
        this.message      = '';
        this.messageStatus = '';
      }, 1500);

    }, () => {
      this.messageStatus = 'Oops! Something went wrong. Please try again.';
      setTimeout(() => this.messageStatus = '', 8000);
    });
  }
}
