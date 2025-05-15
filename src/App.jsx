import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Landing from './pages/home/Landing';
import Terms from './pages/terms/Terms';
import GoalOne from './pages/terms/GoalOne';
import GoalTwo from './pages/terms/GoalTwo';
import GoalThree from './pages/terms/GoalThree';
import GoalFour from './pages/terms/GoalFour';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import AboutUs from './pages/about us/about-us';
import Form from './pages/terms/Form';

function App() {
	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <Landing />,
		},
		{
			path: '/dashboard',
			element: <Dashboard />,
		},

		{
			path: '/signin',
			element: <Signin />,
		},

		{
			path: '/signup',
			element: <Signup />,
		},

		{
			path: '/about-us',
			element: <AboutUs />,
		},

		{
			path: '/terms',
			element: <Terms />,
		},
		{
			path: '/terms/form',
			element: <Form />,
		},

		{ path: '/terms/1', element: <GoalOne /> },
		{ path: '/terms/2', element: <GoalTwo /> },
		{ path: '/terms/3', element: <GoalThree /> },
		{ path: '/terms/4', element: <GoalFour /> },
	]);

	return (
		<>
			<RouterProvider router={browserRouter} />
		</>
	);
}

export default App;
