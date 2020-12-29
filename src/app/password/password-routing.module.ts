import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PasswordComponent } from 'src/app/password/pages/password/password.component'
import { ResetComponent } from 'src/app/password/pages/reset/reset.component'

const routes: Routes = [
    {
        path: 'password',
        component: PasswordComponent
    },
    {
        path: 'password/reset/:token/:email',
        component: ResetComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PasswordRoutingModule { }
