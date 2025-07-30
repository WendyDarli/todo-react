import './Header.css';
import  { useTheme }  from '../../hooks/useTheme';

function Header(){
    const { theme, toggleTheme } = useTheme();
    const bgImage = theme === 'light' ? 'url(/todo-react/svgs/dark-mode.svg)' : 'url(/todo-react/svgs/light-mode.svg)';
    return(
        <div id="header">
            <h1>To do app</h1>
            <a href='#'>Tasks</a>
            <button 
                onClick={toggleTheme}
                style={{ backgroundImage: bgImage}}
                id="toggleTheme"></button>
        </div>

    );
}

export default Header