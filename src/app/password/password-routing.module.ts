import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PasswordComponent } from 'src/app/password/pages/password/password.component'

const routes: Routes = [
    {
        path: 'password',
        component: PasswordComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PasswordRoutingModule { }
