import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfButtonComponent } from '@storefront-ui/angular';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfButtonVariant } from '@storefront-ui/shared';
import { Controls } from 'src/app/components/controls/controls.types';
import { ControlService } from 'services/control.service';

@Component({
  standalone: true,
  imports: [CommonModule, SfButtonComponent, ExampleWrapperComponent],
  templateUrl: './examples-sf-button-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
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
    {
      type: 'boolean',
      modelName: 'disabled',
    },
    {
      type: 'boolean',
      modelName: 'square',
      description: 'Add even paddings for icon-only usage',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    SlotDefault: 'Hello',
    variant: SfButtonVariant.primary,
    disabled: false,
    square: false,
  });

  constructor(private controlService: ControlService) {}
}
