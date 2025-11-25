import './register.style.css'

export function Register( { children } ) {
    return (
        <p className="register-form">
            { children } <a href="#">Cadastre-se</a>
        </p>
    )
}