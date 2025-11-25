import './checkbox.style.css'

export function InputCheckBox( { type, children } ) {
    return (
        <div className="checkbox-form">
            <input type={type} className='input-checkbox-form'/>
            <p className="checkbox-text">
                { children }
            </p>
        </div>
        
    )
}