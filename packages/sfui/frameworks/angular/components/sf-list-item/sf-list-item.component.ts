import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfListItemSize } from '@storefront-ui/shared';

@Component({
  selector: '[sf-list-item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sf-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfListItemComponent {
  @Input() size: SfListItemSize = SfListItemSize.base;

  @Input() disabled = false;

  @Input() selected = false;

  sizeClasses = {
    [SfListItemSize.sm]: 'text-sm px-4 py-1',
    [SfListItemSize.base]: 'px-4 py-2',
    [SfListItemSize.lg]: 'p-4',
  };

  @HostBinding('disabled') get hostDisabled() {
    return this.disabled;
  }

  @HostBinding('class') get hostClass() {
    return [
      'inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10',
      this.sizeClasses[this.size],
      this.disabled ? 'cursor-not-allowed pointer-events-none text-disabled-900' : '',
      this.selected ? 'font-medium' : '',
    ].join(' ');
  }

  @HostBinding('attr.data-testid') dataTestId = 'list-item';
}
