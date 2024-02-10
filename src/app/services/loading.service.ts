import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoadingBS = new BehaviorSubject(false)

  public get isLoading(): Observable<boolean> {
    return this.isLoadingBS.asObservable()
  }

  public show(): void {
    this.isLoadingBS.next(true)
  }

  public hide(): void {
    this.isLoadingBS.next(false)
  }
}
