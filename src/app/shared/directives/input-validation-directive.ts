import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  @Input() errorMessage = 'Campo Invalido';

  ngOnInit() {
    console.log('OnInit errorMessage: ', this.errorMessage);
  }

  @HostListener('blur')
  onBlur() {
    console.log('Ocorreu um blur');
  }
}
