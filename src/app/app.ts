import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recaptcha } from './components/recaptcha/recaptcha';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recaptcha, RecaptchaModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-recaptcha');
}
