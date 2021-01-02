import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { VerifyEmailFormComponent } from './components/verify-email-form/verify-email-form.component'


@NgModule({
    declarations: [
        RegisterComponent,
        RegisterFormComponent,
        VerifyEmailComponent,
        VerifyEmailFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterRoutingModule
    ]
})

export class RegisterModule { }
