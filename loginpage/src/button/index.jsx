import './button.style.css'

export function ButtonForm( {children, type } ) {
    return (
        <button type={ type } className='button-form'>
            { children }
        </button>
    )
}