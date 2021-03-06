import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage = localStorage;

  constructor() { }

  setItem<T>(key: string, value: T) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  addNestedItem<T>(storageKey: string, propertyKey: string, value: T): void {
    let storageItem = this.getItem<{[key: string]: T}>(storageKey);

    if (storageItem) {
      if (typeof storageItem === 'string') {
        throw new Error(`Property is string, can't update ${propertyKey} value`);
      } else {
        storageItem[propertyKey] = value;
      }
    } else {
      storageItem = {[propertyKey]: value};
    }
    this.setItem<{[key: string]: T}>(storageKey, storageItem);
  }

  getItem<T>(key: string): T {
    return JSON.parse(this.storage.getItem(key));
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

}
