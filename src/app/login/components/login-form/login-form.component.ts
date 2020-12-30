import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { FormComponent } from '@federico1818/utils'

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent extends FormComponent {

    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

}
