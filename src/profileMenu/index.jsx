import { LogoutButton } from './logoutButton'
import './profile.style.css'
import { User } from './user'

export function Profile() {
    return (
        <main>
            <User />
            <LogoutButton>
                Sair
            </LogoutButton>
        </main>

    )
}