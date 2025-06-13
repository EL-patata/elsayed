import { Navigate } from 'react-router-dom';
import { useUser } from '../context/user-provider';

export default function AuthedLayout({ children }) {
	const { token } = useUser();

	return <>{token ? <Navigate to={'/'} /> : children}</>;
}
