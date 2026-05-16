import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  private readonly _ngControl = inject(NgControl, {
    self: true,
  });

  private readonly _destroyRef = inject(DestroyRef);
  private readonly _elementRef = inject(ElementRef);
  private readonly _renderer2 = inject(Renderer2);

  @Input() errorMessage = 'Campo Invalido';

  ngOnInit() {
    console.log('OnInit errorMessage: ', this.errorMessage);

    this._ngControl.statusChanges?.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      console.log('Status Mudou!');

      this.updateStatus();
    });
  }

  @HostListener('blur')
  onBlur() {
    console.log('Ocorreu um blur');
    this.updateStatus();
  }

  updateStatus() {
    const control = this._ngControl.control;

    if (!control) return;

    const isInvalid = control.invalid && control.touched;

    if (isInvalid) {
      console.log('Esta invalido');

      this.setInvalidStyles();
    } else {
      console.log('Esta valido');

      this.setValidStyles();
    }
  }
  setInvalidStyles() {
    const el = this._elementRef.nativeElement;

    this._renderer2.removeClass(el, 'border-zinc-800');
    this._renderer2.removeClass(el, 'focus:border-violet-500');
    this._renderer2.removeClass(el, 'focus:ring-violet-500');

    this._renderer2.addClass(el, 'border-red-500');
    this._renderer2.addClass(el, 'focus:border-red-500');
    this._renderer2.addClass(el, 'focus:ring-red-500');
  }
  setValidStyles() {
    const el = this._elementRef.nativeElement;

    this._renderer2.removeClass(el, 'border-red-500');
    this._renderer2.removeClass(el, 'focus:border-red-500');
    this._renderer2.removeClass(el, 'focus:ring-red-500');

    this._renderer2.addClass(el, 'border-zinc-800');
    this._renderer2.addClass(el, 'focus:border-violet-500');
    this._renderer2.addClass(el, 'focus:ring-violet-500');
  }
}
