import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfButtonComponent } from '@storefront-ui/angular';

@Component({
  standalone: true,
  imports: [CommonModule, SfButtonComponent],
  templateUrl: './examples-sf-button-page.component.html',
  styleUrls: ['./examples-sf-button-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesSfButtonPageComponent {}
