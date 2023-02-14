import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './Pages/About';
import Welcome from './Pages/Home';
import Treatments from './Pages/Treatments';
import Contact from './Pages/Contact';
import Layout from './Components/Layout/Layout';
import AllBlogs from './Pages/AllBlogs';
import BlogEdit from './Pages/BlogEdit';
import BlogDetail from './Pages/BlogDetail';
import NewBlog from './Pages/NewBlog';
import NotFound from './Pages/NotFound';
import Admin from './Pages/Admin';
import { getUserIsLoggedIn } from './lib/Authentication';

function App() {
	return (
		<Layout>
			<Switch>
				<Route
					path="/"
					exact
				>
					<Redirect to="/home" />
				</Route>
				<Route
					path="/home"
					exact
					component={Welcome}
				/>
				<Route
					path="/about"
					component={About}
				/>
				<Route
					path="/services"
					component={Treatments}
				/>

				<Route
					path="/contact"
					component={Contact}
				/>
				<Route
					path="/blogs"
					exact
					component={AllBlogs}
				/>

				<Route
					path="/blogs/:blogId"
					component={BlogDetail}
				/>

				<Route
					path="/admin"
					component={Admin}
				/>

				{getUserIsLoggedIn() && (
					<>
						<Route path="/blogedit/:blogId">
							<BlogEdit />
						</Route>

						<Route path="/new-blog">
							<NewBlog />
						</Route>
					</>
				)}
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
