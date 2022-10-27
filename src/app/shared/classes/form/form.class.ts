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

        for (let controlName in this.controls) {
            let control = this.get(controlName)

            if (control instanceof Form) {
                control.updateInitialValue()
            }
        }
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

    resetValue() {
        this.patchValue(this.initialFormValue)
    }

    viewForm() {
        let obj: {[key: string]: any} = {}
    
        let formView = {
          changed: this.changed,
          disabled: this.disabled,
          value: this.value,
          controls: obj
        }
    
        for (let controlName in this.controls) {
          const control = this.get(controlName)
          formView.controls[controlName] = {
            "type": Object.getPrototypeOf(control),
            "value": control?.value,
            "dirty": control?.dirty,
            "pristine": control?.pristine,
            "touched": control?.touched,
            "errors": (control?.errors) || {},
            "disable": control!.disabled,
          }
        }
    
        return formView
      }

    get controlss() {
        return super.controls
    }
}