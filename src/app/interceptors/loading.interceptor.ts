import {
  HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest,
} from '@angular/common/http'
import { inject } from '@angular/core'
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'
import { LoadingService } from '../services/loading.service'

export const loadingInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  inject(LoadingService).show()
  return next(request).pipe(
    finalize(() => inject(LoadingService).hide()),
  )
}
