import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http'
import { inject } from '@angular/core'
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'
import { LoadingService } from '../services/loading.service'

export const loadingInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  // sources https://medium.com/zurvin/angular-loading-global-con-interceptor-1259a62cd716
  // let countRequest = 0

  const loadingService = inject(LoadingService)

  // if (!countRequest) {
  loadingService.show()
  // }

  // countRequest += 1

  return next(request)
    .pipe(
      finalize(() => {
        // countRequest -= 1
        // if (!countRequest) {
        loadingService.hide()
        // }
      }),
    )
}
