import { appTheme } from './Theme/Theme';
import { getUserIsLoggedIn } from './lib/Authentication';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import About from './Pages/About';
import AllBlogs from './Pages/AllBlogs';
import BlogDetail from './Pages/BlogDetail';
import BlogEdit from './Pages/BlogEdit';
import CommonLayout from './Components/Layout/Layout';
import Contact from './Pages/Contact';
import NewBlog from './Pages/NewBlog';
import Treatments from './Pages/Treatments';
import Home from './Pages/Home';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
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
					element={<CommonLayout component={<Home />} />}
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
		</ThemeProvider>
	);
}

export default App;
