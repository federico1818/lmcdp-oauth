import { Component, OnInit } from '@angular/core'

import { MessageService } from 'src/app/shared/services/message.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    public isLoading: boolean = false

    constructor(
        protected messageService: MessageService
    ) {}

    public ngOnInit(): void {
        this.messageService.isLoading.subscribe((isLoading: boolean) => {
            this.isLoading = isLoading
        })
    }
}