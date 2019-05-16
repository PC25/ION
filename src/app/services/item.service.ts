import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "Item 1",
      'description': 'Description'
    },
    {
      'id': "2",
      'title': "Item 2",
      'description': 'Description'
    },
    {
      'id': "3",
      'title': "Item 3",
      'description': 'Description'
    },
    {
      'id': "4",
      'title': "Item 4",
      'description': 'Description'
    },
  ]

  constructor() { }

  createItem(title, description){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
