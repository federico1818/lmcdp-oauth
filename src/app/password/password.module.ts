import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './pages/password/password.component';
import { PasswordEmailFormComponent } from './components/password-email-form/password-email-form.component';
import { ResetComponent } from './pages/reset/reset.component';
import { PasswordResetFormComponent } from './components/password-reset-form/password-reset-form.component'


@NgModule({
    declarations: [
        PasswordComponent,
        PasswordEmailFormComponent,
        ResetComponent,
        PasswordResetFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordRoutingModule
    ]
})

export class PasswordModule { }
