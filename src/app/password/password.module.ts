import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './pages/password/password.component';
import { PasswordEmailFormComponent } from './components/password-email-form/password-email-form.component'


@NgModule({
    declarations: [PasswordComponent, PasswordEmailFormComponent],
    imports: [
        CommonModule,
        PasswordRoutingModule
    ]
})

export class PasswordModule { }
