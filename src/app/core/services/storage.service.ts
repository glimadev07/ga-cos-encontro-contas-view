import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private sessionStorageSubject: Subject<any> = new Subject<any>();

  getItem(key: string): any {
    const item = sessionStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item as string);
    }
  }

  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
    this.sessionStorageSubject.next({ key, value });
  }

  subscribeToItem(key: string): Observable<any> {
    return this.sessionStorageSubject.asObservable()
      .pipe(
        filter((data: any) => data.key === key),
        map((data: any) => data.value)
      );
  }
}
