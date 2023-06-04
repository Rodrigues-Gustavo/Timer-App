import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoTimer from '../../assets/logo-timer.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      {/* <img src="https://loading.io/icon/zhk2bz" alt="" /> */}
      {/* <span>LOGO</span> */}
      <img src={logoTimer} alt="" />
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
