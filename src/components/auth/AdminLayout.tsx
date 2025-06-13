import { Navigate } from 'react-router-dom';
import { useUser } from '../context/user-provider';

export default function AdminLayout({ children }) {
	const { user } = useUser();

	return <>{user?.userType !== 0 ? <Navigate to={'/'} /> : children}</>;
}
