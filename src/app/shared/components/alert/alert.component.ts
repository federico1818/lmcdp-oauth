import { Component } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
    private readonly _afterClosed: Subject<null> = new Subject<null>()
    public afterClosed: Observable<null> = this._afterClosed.asObservable()
    public message: string | null = null

    public close(): void {
        this._afterClosed.next()
    }

}
