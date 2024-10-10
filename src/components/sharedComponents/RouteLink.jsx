import { NavLink } from "react-router-dom";

export default function RouteLink({ link, linkName,isOpen }) {
    return <li key={linkName} onClick={isOpen}>
        <NavLink to={link} className={({ isActive, isPending }) =>
            isActive
                ? "active"
                : isPending
                    ? "pending"
                    : ""
        }>{linkName}</NavLink>
    </li>
}