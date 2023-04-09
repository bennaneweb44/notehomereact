import { Link, useNavigate } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
	const navigate = useNavigate();

	const handleDisconnect = () => {
		if (localStorage.getItem('token')) {
			localStorage.removeItem('token');
		}
		setTimeout(() => {
			navigate('/login')
		}, 3000);
	}

	return (
		<header>
			<h2>Menu</h2>
			<nav>
				<ul>
					<li>
						<Link to={ '/' }>Home</Link>
					</li>
					<li>
						<Link to={ '/' } onClick={handleDisconnect}>Se déconnecter</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;