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
		}, 1000);
	}

	return (
		<header>
			<h4>Gestion des catégories</h4>
			<nav>
				<ul>
					<li>
						<Link to={ '/' } onClick={handleDisconnect}>Se déconnecter</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;