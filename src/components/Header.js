import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onClickAdd, AddFormShown }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button color={AddFormShown ? "red" : "green"}
                    text={AddFormShown ? "Close" : "Add"}
                    onClick={onClickAdd} />)
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS IN JS
// const headingStyling = {
//     color: "red",
//     backgroundColor: "grey"
// }

export default Header
