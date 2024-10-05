import { Injectable } from '@angular/core';
import { BehaviorSubject, map, startWith, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlockUiService {
  private blockState = new BehaviorSubject<boolean>(false);
  public blocked$ = this.blockState.asObservable();
  private unblockDelay = 1000;

  block(): void {
    console.log('Block');
    this.blockState.next(true);
  }

  unblock(): void {
    console.log('Unblock');
    this.blockState.next(false);
  }
}
