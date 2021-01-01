import { Component } from '@angular/core'
import { OauthService } from '@federico1818/passport'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    constructor(
        protected oauthService: OauthService
    ) {}
    
    public onSubmit(form: any): void {
        this.login(form)
    }

    public login(form: any): void {
        this.oauthService.login(form).subscribe()
    }

}
