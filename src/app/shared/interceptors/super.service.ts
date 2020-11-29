import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class SuperService implements HttpInterceptor {
    
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.clone({
            headers: req.headers.set('Accept', 'application/json')
        })
        return next.handle(req)
        //return next.handle(headers);
    }

}
