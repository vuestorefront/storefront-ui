import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[sf-list-item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sf-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfListItemComponent {}
