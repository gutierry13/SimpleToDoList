import { HomeNavAside, HomeContainer, HomeMainContent } from '../styles/home'
import { FaUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { ToggleDarkAndLightButton } from './toggleDarkAndLight'
import { HomeDivTable } from './homeDivTable'

export function Home() {
  return (
    <HomeContainer>
      <HomeNavAside>
        <header>
          <FaUser />
          <p>Meu perfil</p>
        </header>
        <section>
          <h1>My lists</h1>
        </section>
        <footer>
          <ToggleDarkAndLightButton />
          <div>
            <BiLogOut />
            <p>Logout</p>
          </div>
        </footer>
      </HomeNavAside>
      {/* <h1>Essa pagina ainda está em desenvolvimento</h1> */}
      <HomeMainContent>
        <h1>My lists</h1>
        <HomeDivTable />
      </HomeMainContent>
    </HomeContainer>
  )
}

/* <h1>Essa pagina ainda está em desenvolvimento ¯\_(ツ)_/¯</h1>
<p>Acompanhe mais sobre o projeto no <a href="https://github.com/gutierry13/SimpleToDoList">Github</a></p> */
