import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SfButtonVariant, SfButtonSize } from '@storefront-ui/shared';

@Component({
  selector: '[sf-button]',
  standalone: true,
  templateUrl: './sf-button.component.html',
  imports: [CommonModule],
})
export class SfButtonComponent {
  @Input() variant: SfButtonVariant = SfButtonVariant.primary;

  @Input() size: SfButtonSize = SfButtonSize.base;

  @Input() disabled = false;

  @Input() square = false;

  variantClasses = {
    [SfButtonVariant.primary]:
      'text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300',
    [SfButtonVariant.secondary]:
      'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 shadow hover:shadow-md active:shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50',
    [SfButtonVariant.tertiary]:
      'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent',
  };

  @HostBinding('disabled') get hostDisabled() {
    return this.disabled;
  }

  @HostBinding('class') get hostClass() {
    return [
      'inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',
      this.variantClasses[this.variant],
      this.sizeClasses.join(' '),
    ].join(' ');
  }

  @HostBinding('attr.data-testid') dataTestId = 'button';

  get sizeClasses() {
    switch (this.size) {
      case SfButtonSize.sm:
        return [this.square ? 'p-1.5' : 'leading-5 text-sm py-1.5 px-3', 'gap-1.5'];
      case SfButtonSize.lg:
        return [this.square ? 'p-4' : 'py-3 leading-6 px-6', 'gap-3'];
      default:
        return [this.square ? 'p-2' : 'py-2 leading-6 px-4', 'gap-2'];
    }
  }
}
