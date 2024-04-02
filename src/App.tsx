import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './Pages/About';
import Welcome from './Pages/Home';
import Treatments from './Pages/Treatments';
import Contact from './Pages/Contact';
import AllBlogs from './Pages/AllBlogs';
import BlogEdit from './Pages/BlogEdit';
import BlogDetail from './Pages/BlogDetail';
import NewBlog from './Pages/NewBlog';
import { getUserIsLoggedIn } from './lib/Authentication';
import CommonLayout from './Components/Layout/Layout';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Navigate
						to="/home"
						replace
					/>
				}
			/>
			<Route
				path="*"
				element={
					<Navigate
						to="/home"
						replace
					/>
				}
			/>
			<Route
				path="/home"
				element={<CommonLayout component={<Welcome />} />}
			/>
			<Route
				path="/about"
				element={<CommonLayout component={<About />} />}
			/>
			<Route
				path="/services"
				element={<CommonLayout component={<Treatments />} />}
			/>
			<Route
				path="/contact"
				element={<CommonLayout component={<Contact />} />}
			/>
			<Route
				path="/blogs"
				element={<CommonLayout component={<AllBlogs />} />}
			/>
			<Route
				path="/blogs/:blogId"
				element={<CommonLayout component={<BlogDetail />} />}
			/>
			{getUserIsLoggedIn() && (
				<>
					<Route
						path="/blogedit/:blogId"
						element={<CommonLayout component={<BlogEdit />} />}
					/>
					<Route
						path="/new-blog"
						element={<CommonLayout component={<NewBlog />} />}
					/>
				</>
			)}
		</Routes>
	);
}

export default App;
