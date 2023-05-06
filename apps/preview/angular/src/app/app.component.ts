import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SfButtonComponent } from '@storefront-ui/angular';
import { SfButtonSize } from '@storefront-ui/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SfButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';

  buttonSize = signal(SfButtonSize.lg);

  toggleSize() {
    this.buttonSize.set(SfButtonSize.base);
  }
}
