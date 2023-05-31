import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterValue } from 'src/app/model.ts/counter-value';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // public counterValues: CounterValue[] = [{ value: 0, changes: 0,type: 'start' }];

  public counterValuesSubject: BehaviorSubject<CounterValue[]> = new BehaviorSubject([{value: 0, changes: 0,type: 'start'}])

  constructor() { }

  increment() {
    const counterValuesArray = this.counterValuesSubject.value;
    const oldCounterValue = counterValuesArray[counterValuesArray.length - 1];
    const oldValue = oldCounterValue.value;
    const oldChanges = oldCounterValue.changes;

    const newCounterValue = {
      value: oldValue + 1,
      changes: oldChanges + 1,
      type: 'increment'
    }

    counterValuesArray.push(newCounterValue);
    this.counterValuesSubject.next(counterValuesArray)
  }

  decrement() {
    const counterValuesArray = this.counterValuesSubject.value;
    const oldCounterValue = counterValuesArray[counterValuesArray.length - 1];
    const oldValue = oldCounterValue.value;
    const oldChanges = oldCounterValue.changes;

    const newCounterValue = {
      value: oldValue - 1,
      changes: oldChanges + 1,
      type: 'decrement'

    }

    counterValuesArray.push(newCounterValue);
  }





  resetOddCounterValues(){
    const counterValuesArray = this.counterValuesSubject.value;
    for (let i = 0; i < counterValuesArray.length; i++) {
      const counterValue = counterValuesArray[i];
      if(counterValue.changes%2 ===1){
        counterValue.value=0
      }

    }
  }













}



