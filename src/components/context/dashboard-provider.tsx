import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useUser } from './user-provider';

export type StudentRequest = {
	studentId: string;
	studentName: string;
	formType: number;
	dropMinue: string;
	details: string;
	requestId: string;
};

type DashboardContext = {
	requests: StudentRequest[];
	reviewRequest: (id: string, responseType: 1 | 2) => Promise<void>;
};

const DashboardContext = createContext<DashboardContext | undefined>(undefined);

export function DashboardProvider({ children }: PropsWithChildren) {
	const [requests, setRequests] = useState<StudentRequest[]>([]);

	const { token } = useUser();

	const getRequests = async () => {
		const res = await fetch(
			'http://localhost:5121/api/Auth/GetStudentsRequests',
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (res.ok) {
			const data = await res.json();

			setRequests(data);

			console.log(data);
		}
	};

	const reviewRequest = async (id: string, responseType: 1 | 2) => {
		const res = await fetch(
			'http://localhost:5121/api/Auth/review',

			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},

				body: JSON.stringify({ id, responseType }),
			}
		);

		if (res.ok) {
			const data = await res.json();

			setRequests(data);

			console.log(data);
		}
	};

	useEffect(() => {
		getRequests();
	}, []);

	return (
		<DashboardContext.Provider value={{ requests, reviewRequest }}>
			{children}
		</DashboardContext.Provider>
	);
}

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (context === undefined) {
		throw new Error('useDashboard must be used within a DashboardProvider');
	}
	return context;
};
