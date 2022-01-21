import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calObj: any = {
    resultText: ''
  }
  constructor() { }

  ngOnInit(): void {
  }


  /* clear data */
  clear() {
    this.calObj.resultText = '';
  }

  /* input display*/
  inputDisplay(num: any) {
    this.calObj.resultText += num;
  }

  /* get result*/
  result() {
    let inputText = this.calObj.resultText;
    let finalResult = eval(inputText);
    this.calObj.resultText = finalResult;
  }

}
