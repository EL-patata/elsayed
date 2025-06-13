import { useLocalStorage } from '@/hooks/use-localstorage';
import {
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

type User = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	userType: number;
};

type UserContextType = {
	user: User | null;
	token: string;

	logout: () => void;

	signin: (email: string, password: string) => void;

	signup: (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		id: number
	) => Promise<void>;

	verifyEmail: (email: string, otp: string) => Promise<void>;

	isDialogOpen: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useState<User | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

	const { storedValue: token, setStoredValue } =
		useLocalStorage<string>('youssif_auth_token');

	const getUserInfo = async () => {
		const res = await fetch('http://localhost:5121/api/Auth/GetUserInfo', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (res.ok) {
			const data = await res.json();

			setUser(data);
		} else setUser(null);
	};

	const signin = async (email: string, password: string) => {
		const res = await fetch(`http://localhost:5121/api/Auth/Login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (res.ok) {
			const data = await res.text();
			toast.success(<div dir="rtl">تم تسجيل الدخول بنجاح.</div>);

			setStoredValue(data);

			window.location.href = '/';
		} else {
			toast.error(<div dir="rtl">حدث خطأ ما, حاول مجددا.</div>);
		}
	};

	const signup = async (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		id: number
	) => {
		const res = await fetch(`http://localhost:5121/api/Auth/Student/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
				id,
			}),
		});

		if (res.ok) {
			toast.success(<div dir="rtl">تم ارسال البيانات بنجاح.</div>);

			setIsDialogOpen(true);
		} else {
			toast.error(<div dir="rtl">حدث خطأ في التسجيل, حاول مجددا.</div>);
			setIsDialogOpen(false);
		}
	};

	const verifyEmail = async (email: string, otp: string) => {
		const res = await fetch(`http://localhost:5121/api/Auth/VerifyEmail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				otp,
			}),
		});

		if (res.ok) {
			toast.success(<div dir="rtl">تم تأكيد الحساب بنجاح.</div>);

			setIsDialogOpen(false);
		} else {
			setIsDialogOpen(true);
			toast.error(<div dir="rtl">حدث خطأ في التأكيد, حاول مجددا.</div>);
		}
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	const logout = () => {
		setStoredValue(null);
		window.location.href = '/';
	};

	console.log('USER FROM PROVIDER', user);
	return (
		<UserContext.Provider
			value={{ user, token, isDialogOpen, logout, signin, signup, verifyEmail }}
		>
			{children}
		</UserContext.Provider>
	);
}

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};
