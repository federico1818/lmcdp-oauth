import { Component } from '@angular/core'

import { AlertService } from './shared/services/alert.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor(
        protected alertService: AlertService
    ) {}

    public open(): void {
        this.alertService.open('Message')
    }

}