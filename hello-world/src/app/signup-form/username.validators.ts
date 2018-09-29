import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Usernamevalidators {
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0){
            return { cannotContainSpace : true }
        } else {
            return null;
        }
    }

    static customMinLength(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).length > 5) {
            return {customMinLength: {
                requiredLength : 10,
                actualLength : control.value.length
            } }
        } else {
            return null;
        }
    }


    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(control.value === 'Saravana'){
                    return resolve({ shouldBeUnique: true});
                } else {
                    return resolve({ shouldBeUnique: false});
                }
            },2000);
        });
    }
}