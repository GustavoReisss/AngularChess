import { FormGroup, FormControl} from "@angular/forms";

export class Form extends FormGroup {
    private initialFormValue: Object

    constructor(form: {[key: string]: any}) {
        
        Object.keys(form).forEach(key => {

            if (Array.isArray(form[key])) {
                form[key] = new FormControl(...form[key])
                return
            }

            form[key] = new FormControl(form[key])
        })
        
        super(form)
        this.initialFormValue = this.value
    }

    get changed() {
        const toString = (value: Object) => JSON.stringify(value)

        return toString(this.initialFormValue) !== toString(this.value)
    }

    updateInitialValue() {
        this.initialFormValue = this.value
    }

    setDirtyAndTouched() {
        Object.keys(this.controls).forEach(
            control => {
                this.get(control)?.markAsDirty()
                this.get(control)?.markAsTouched()
            }
        )
    }

    isInvalid(controlName: string) {
        const control = this.get(controlName)
        return control?.dirty && control.touched && control.errors
    }
}