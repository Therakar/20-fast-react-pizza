import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
    return (
        <header className="border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase">
            {/* use tracking-['value in px or rem'] if you want to personalize the result more*/}
            <Link to="/" className="tracking-widest">
                Fast React Pizza Co.
            </Link>

            <SearchOrder />

            <Username />
        </header>
    );
}

export default Header;
