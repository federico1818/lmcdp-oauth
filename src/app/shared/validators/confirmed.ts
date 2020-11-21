import { FormGroup } from '@angular/forms'

export function confirmed(formControlName: string) {
    return (formGroup: FormGroup) => {
        const formControlValue = formGroup.get(formControlName)?.value
        const formControlValueConfirmation = formGroup.get(`${ formControlName }_confirmation`)?.value
        
        return formControlValue === formControlValueConfirmation? null: { confirmed: true }
    }
}