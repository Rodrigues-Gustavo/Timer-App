import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      {/* <img src={logo} alt="" /> */}
      <span>LOGO</span>
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
