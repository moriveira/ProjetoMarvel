import { InputCheckBox } from './checkbox'
import { ForgotPassword } from './forgotPassword'
import './login-options.style.css'

export function LoginOptions() {
    return (
        <main className='login-options'>
            <InputCheckBox type="checkbox">
                Salvar Login
            </InputCheckBox>
            <ForgotPassword>
                Esqueci a Senha
            </ForgotPassword>
        </main>

    )
}