import { Component } from '@angular/core'
import { UiService } from '@federico1818/passport'

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})

export class PasswordComponent {
    public sent: boolean = false
    public message: string | null = null

    constructor(
        protected uiService: UiService
    ) {}

    public onSubmit(form: any): void {
        this.uiService.sendResetLinkEmail(form, '/api/password/email').subscribe((res) => {
            this.sent = true
            this.message = res.message
        })
    }

}
