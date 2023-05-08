import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from '../controls/controls.component';
import { Controls } from '../controls/controls.types';

@Component({
  selector: 'app-example-wrapper',
  standalone: true,
  templateUrl: './example-wrapper.component.html',
  styleUrls: ['./example-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ControlsComponent],
})
export class ExampleWrapperComponent {
  @Input() controls: Controls = [];

  @Input() componentContainerClassName:
    | string
    | string[]
    | Set<string>
    | { [klass: string]: unknown }
    | null
    | undefined;

  @Input() state = signal<{ [k: string]: unknown }>({});
}
