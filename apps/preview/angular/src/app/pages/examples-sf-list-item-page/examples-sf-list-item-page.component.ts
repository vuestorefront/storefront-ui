import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from 'src/app/components/example-wrapper/example-wrapper.component';
import { SfListItemComponent } from '@storefront-ui/angular';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, SfListItemComponent],
  templateUrl: './examples-sf-list-item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesSfListItemPageComponent {}
