import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RegisterComponent } from './pages/register/register.component'
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component'

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'email/verify/:id/:hash',
        component: VerifyEmailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegisterRoutingModule { }
