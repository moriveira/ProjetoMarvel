import { ButtonForm } from '../button'
import { InputForm } from '../input'
import { Label } from '../label'
import { TitleForm } from '../title'
import './login-form.style.css'
import { LoginOptions } from '../loginOptions'
import { Register } from '../register'

export function LoginForm() {
    return (
        <main>
            <div className="login-form">
                <TitleForm>
                    Bem-Vindo de Volta!
                </TitleForm>
                <Label htmlFor="">
                    Acesse sua Conta:
                </Label>
                <InputForm
                    type="text"
                    id="user"
                    placeholder="Usuário"
                />
                <InputForm
                    type="password"
                    id="password"
                    placeholder="Senha"
                />
                <LoginOptions>

                </LoginOptions>
                <ButtonForm type="submit">
                    Entrar
                </ButtonForm>
                <Register>
                    Ainda não tem o Login?
                </Register>
            </div>

        </main>

    )
}