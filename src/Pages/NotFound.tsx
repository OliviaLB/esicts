import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="wrappercol">
			<h1>Page not found!</h1>
			<div>
				            <h1>Oops! You seem to be lost.</h1>
				            <p>Here are some helpful links:</p>
				            <Link to="/">Home</Link>
				            <Link to="/blogs">Blog</Link>
				            <Link to="/contact">Contact</Link>
				        
			</div>
		</div>
	);
};

export default NotFound;
