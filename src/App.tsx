import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Landing from './pages/home/Landing';
import Terms from './pages/terms/Terms';

import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import AboutUs from './pages/about us/about-us';
import Form from './pages/terms/Form';
import PrivateLayout from './components/auth/PrivateLayout';
import { UserProvider } from './components/context/user-provider';
import AuthedLayout from './components/auth/AuthedLayout';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner';
import AdminLayout from './components/auth/AdminLayout';
import { DashboardProvider } from './components/context/dashboard-provider';
import MyRequests from './pages/my-requests/MyRequests';
import Goal1 from './pages/terms/Goal1';
import Goal2 from './pages/terms/Goal2';
import Goal3 from './pages/terms/Goal3';
import Goal4 from './pages/terms/Goal4';
import Goal5 from './pages/terms/Goal5';
import Goal6 from './pages/terms/Goal6';
import Goal7 from './pages/terms/Goal7';
import Goal8 from './pages/terms/Goal8';
import Goal9 from './pages/terms/Goal9';
import Goal10 from './pages/terms/Goal10';
import Goal11 from './pages/terms/Goal11';
import Goal12 from './pages/terms/Goal12';
import Goal13 from './pages/terms/Goal13';
import Goal14 from './pages/terms/Goal14';
import Goal15 from './pages/terms/Goal15';
import Goal16 from './pages/terms/Goal16';
import Goal17 from './pages/terms/Goal17';

function App() {
	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <Landing />,
		},
		{
			path: '/dashboard',
			element: (
				<AdminLayout>
					<DashboardProvider>
						<Dashboard />
					</DashboardProvider>
				</AdminLayout>
			),
		},

		{
			path: '/signin',
			element: (
				<AuthedLayout>
					<Signin />
				</AuthedLayout>
			),
		},

		{
			path: '/signup',
			element: (
				// <AuthedLayout>
				<Signup />
				//</AuthedLayout>
			),
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

		{
			path: '/terms/1',
			element: (
				<PrivateLayout>
					<Goal1 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/2',
			element: (
				<PrivateLayout>
					<Goal2 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/3',
			element: (
				<PrivateLayout>
					<Goal3 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/4',
			element: (
				<PrivateLayout>
					<Goal4 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/5',
			element: (
				<PrivateLayout>
					<Goal5 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/6',
			element: (
				<PrivateLayout>
					<Goal6 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/7',
			element: (
				<PrivateLayout>
					<Goal7 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/8',
			element: (
				<PrivateLayout>
					<Goal8 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/9',
			element: (
				<PrivateLayout>
					<Goal9 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/10',
			element: (
				<PrivateLayout>
					<Goal10 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/11',
			element: (
				<PrivateLayout>
					<Goal11 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/12',
			element: (
				<PrivateLayout>
					<Goal12 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/13',
			element: (
				<PrivateLayout>
					<Goal13 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/14',
			element: (
				<PrivateLayout>
					<Goal14 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/15',
			element: (
				<PrivateLayout>
					<Goal15 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/16',
			element: (
				<PrivateLayout>
					<Goal16 />
				</PrivateLayout>
			),
		},
		{
			path: '/terms/17',
			element: (
				<PrivateLayout>
					<Goal17 />
				</PrivateLayout>
			),
		},

		{
			path: 'my-requests',
			element: (
				<PrivateLayout>
					<MyRequests />
				</PrivateLayout>
			),
		},

		{
			path: '*',
			element: <NotFound />,
		},
	]);

	return (
		<>
			<UserProvider>
				<RouterProvider router={browserRouter} />
			</UserProvider>
			<Toaster richColors={true} />
		</>
	);
}

export default App;
