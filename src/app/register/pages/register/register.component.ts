import { Component, OnInit } from '@angular/core'
import { OauthService } from '@federico1818/passport'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    constructor(
        protected oauthService: OauthService
    ) {}

    ngOnInit(): void {
    }

}
