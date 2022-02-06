import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/actions";

function ToggleTheme() {

    const theme = useSelector((state) => state.darkTheme);
    const dispatch = useDispatch();

    return (
        <FontAwesomeIcon
            className={theme ? 'text-light' : 'text-dark'}
            onClick={() => {dispatch(toggleTheme(!theme))}} 
            icon={theme ? faSun : faMoon}
            title={theme ? "Light Theme" : "Dark Theme"}
            size="lg" />
    )
}

export default ToggleTheme;