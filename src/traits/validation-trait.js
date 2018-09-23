/* Позволяет использовать следующие правила валидации:
fieldIsRequired
passwordIsRequired
passwordMustBeAtLeast6Chars
passwordMustBeAtLeast8Chars
confirmPasswordIsRequired
emailIsRequired
emailMustBeValid
urlMustBeValid
nameIsRequired
numericValueRequired

maximumLength(NN)
minimumLength(NN)
mustBeLongText
mustBeValidBic
mustBeValidInn
mustBeValidPersonalInn
mustBeValidOgrn
mustBeValidOgrnOrEmpty
mustBeValidKpp
mustBeValidKc(bic)
mustBeValidPc(bic)

Примеры:

<v-text-field
  label="Введите ИНН"
  v-model="form.inn"
  :rules=[validation.mustBeValidBic]
>

 <v-text-field
 label="Введите EMAIL"
 v-model="form.email"
 :rules=[validation.emailIsRequired, validation.emailMustBeValid]
 >

*/
import validationRules from '@/lib/validation-rules.js'
export default {
  data () {
    return {
      validation: validationRules
    }
  }
}
