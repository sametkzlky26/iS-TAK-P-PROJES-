import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <h2>İş Takip</h2>
    <div>
      <NavLink to="/">İş Listesi</NavLink>
      <NavLink to="/new">İş Ekle</NavLink>
    </div>
    </header>
  )
}

export default Header;
