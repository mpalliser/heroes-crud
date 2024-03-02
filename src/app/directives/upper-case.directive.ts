import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[appUpperCase]',
  standalone: true,
})
export class UpperCaseDirective {
  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement
    input.value = input.value.toUpperCase()
  }
}
