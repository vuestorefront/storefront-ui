import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfButtonComponent } from '@storefront-ui/angular';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfButtonVariant } from '@storefront-ui/shared';
import { Controls } from 'src/app/components/controls/controls.types';
import { prepareControls } from 'src/app/components/controls/controls.utils';

@Component({
  standalone: true,
  imports: [CommonModule, SfButtonComponent, ExampleWrapperComponent],
  templateUrl: './examples-sf-button-page.component.html',
  styleUrls: ['./examples-sf-button-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesSfButtonPageComponent {
  controls: Controls = [
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot',
    },
    {
      type: 'select',
      modelName: 'variant',
      options: Object.keys(SfButtonVariant),
    },
  ];

  prepareControlsData = prepareControls<{ SlotDefault?: string; variant?: SfButtonVariant }>(this.controls, {
    SlotDefault: 'Hello',
    variant: SfButtonVariant.primary,
  });
}
