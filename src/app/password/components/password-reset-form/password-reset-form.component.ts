import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { FormComponent } from '@federico1818/utils'

import { confirmed } from 'src/app/shared/validators/confirmed'

@Component({
    selector: 'app-password-reset-form',
    templateUrl: './password-reset-form.component.html',
    styleUrls: ['./password-reset-form.component.scss']
})

export class PasswordResetFormComponent extends FormComponent {
    
    public form = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        password_confirmation: ['', [Validators.required, Validators.minLength(4)]]
    }, {
        validator: confirmed('password')
    })

}
