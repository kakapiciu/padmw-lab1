import { Component } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})

// Other code
export class CalcComponent {

  calcForm = this.formBuilder.group({
    number1: '',
    number2: '',
  });
  result: number = 0;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    const number1 = Number(this.calcForm.get('number1')?.value);
    const number2 = Number(this.calcForm.get('number2')?.value);
    this.result = number1 + number2;
  }
}
