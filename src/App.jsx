import './App.css'
import { HeroesList } from './arrayHeroes'
import { LogoMarvel } from './logoMarvel'
import { MenuButton } from './menuButtons'
import { Profile } from './profileMenu'

function App() {
  return (
    <>
      <header>
        <LogoMarvel />
        <div className="btn-menu">
          <MenuButton id="btn-filtrarPersonagens">
            Personagens
          </MenuButton>
          <MenuButton id="btn-filtrarFilmes">
            Filmes
          </MenuButton>
          <MenuButton id="btn-filtrarHQS">
            HQS
          </MenuButton>
        </div>
        <Profile />
      </header>

      <main>
        <HeroesList />
      </main>
    </>
  )
}

export default App
