import { Component } from '@angular/core'
import { OauthService } from '@federico1818/passport'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    public created: boolean = false

    constructor(
        protected oauthService: OauthService
    ) {}

    public onSubmit(form: any): void {
        this.register(form)
    }

    protected register(form: any): void {
        this.oauthService.register(form, '/api/register').subscribe((res: any) => {
            this.created = true
        })
    }

}
