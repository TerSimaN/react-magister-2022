import { useTheme } from "../../ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ToggleTheme() {
    const [theme, toggleTheme] = useTheme();

    return (
        <FontAwesomeIcon
            className={theme ? 'text-light' : 'text-dark'}
            onClick={toggleTheme} 
            icon={theme ? faSun : faMoon}
            title={theme ? "Light Theme" : "Dark Theme"}
            size="lg" />
    )
}

export default ToggleTheme;