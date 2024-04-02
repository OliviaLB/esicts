import { Fragment } from 'react';

import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import classes from './Layout.module.css';

const CommonLayout: React.FC<{ component: React.ReactNode }> = ({ component }) => {
	return (
		<Fragment>
			<Nav />
			<Banner />
			<main className={classes.main}>{component} </main>

			<Footer />
		</Fragment>
	);
};

export default CommonLayout;
