import './menu-buttons.style.css'

export function MenuButton({ children, ...props }) {
  return (
    <li>
      <button {...props} className='btn'>
        {children}
      </button>
    </li>
  );
}