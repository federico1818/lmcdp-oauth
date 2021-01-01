import { Component, Input } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { OauthService } from '@federico1818/passport'
import { FormComponent } from '@federico1818/utils'
import { confirmed } from 'src/app/shared/validators/confirmed'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent extends FormComponent {

    public form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        password_confirmation: ['', [Validators.required, Validators.minLength(4)]]
    }, {
        validator: confirmed('password')
    })

}
