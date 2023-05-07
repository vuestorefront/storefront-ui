import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-examples-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './examples-layout.component.html',
  styleUrls: ['./examples-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesLayoutComponent {}
