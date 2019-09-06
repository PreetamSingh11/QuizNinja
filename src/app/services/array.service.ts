import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  removeElement(elements: any[], value: any): any[] {
    return elements.filter(element => {
      return value !== element;
    });
  }

}
