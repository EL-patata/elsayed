import { Navigate } from 'react-router-dom';
import { useUser } from '../context/user-provider';

export default function PrivateLayout({ children }) {
	const { token } = useUser();

	return <>{token ? children : <Navigate to={'/signin'} />}</>;
}
