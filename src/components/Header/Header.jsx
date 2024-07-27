import { Link } from 'react-router-dom';
import useThemeStore from '../../store/themeStore';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Header = () => {
  const {
    activeTheme,
  } = useThemeStore();

  return (
    <div className={`
    HEADER
    SECTION-CENTER
    flex flex-row justify-between
    h-[3.25rem]
    pl-1.5
    ${activeTheme.text.screen}`}
    >
      <Link to="/">
        <div className="mt-3 text-[2rem]/[1.25em] font-bold">calc</div>
      </Link>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
