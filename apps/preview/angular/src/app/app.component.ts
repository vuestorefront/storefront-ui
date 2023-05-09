import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SfButtonComponent } from '@storefront-ui/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SfButtonComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
