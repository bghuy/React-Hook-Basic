import "./Nav.scss"
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min"
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="selected" to="/" exact>Home</NavLink>
            <NavLink activeClassName="selected" to="/timer" exact>Timer</NavLink>
            <NavLink activeClassName="selected" to="/todo" exact>To-do-list</NavLink>
            <NavLink activeClassName="selected" to="/secret" exact>About</NavLink>
            <NavLink activeClassName="selected" to="/blog" exact>Blog tab</NavLink>
        </div>
    )
}

export default Nav