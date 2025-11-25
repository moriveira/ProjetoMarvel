import './logout-button.style.css'

export function LogoutButton( { children } ) {
    return (
        <a href="#" className="logout-button">
           { children }
        </a>
    )
}