import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-recaptcha',
  standalone: true, // ✅ REQUIRED for imports[] to work
  imports: [FormsModule, RecaptchaModule], // ✅ Now Angular recognizes <re-captcha>
  templateUrl: './recaptcha.html',
  styleUrl: './recaptcha.scss',
})
export class Recaptcha {
  captchaResolved = false;
  captchaToken: string | null = null;

  onCaptchaResolved(token: any) {
    this.captchaToken = token;
    this.captchaResolved = !!token;
    console.log('reCAPTCHA resolved:', token);
  }

  onSubmit() {
    if (this.captchaResolved && this.captchaToken) {
      console.log('Form submitted with token:', this.captchaToken);
      // TODO: send token to backend for verification
    } else {
      console.log('Please complete the reCAPTCHA');
    }
  }
}
