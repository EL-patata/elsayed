import { useUser } from '@/components/context/user-provider';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { StudentRequest } from '@/components/context/dashboard-provider';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { CheckCheck, Hourglass, X } from 'lucide-react';
import { goalNames } from '../terms/Form.Menus';

export default function MyRequests() {
	const { token } = useUser();

	type ExtendedRequest = StudentRequest & {
		requestStatus: 1 | 2;
	};

	const [requests, setRequests] = useState<ExtendedRequest[]>([]);

	const getOwnRequests = async () => {
		const res = await fetch('http://localhost:5121/api/Auth/GetOwnRequests', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await res.json();

		if (res.ok) setRequests(data);
	};

	useEffect(() => {
		getOwnRequests();
	}, []);
	return (
		<main>
			<Navbar />
			<div
				dir="rtl"
				className="py-24 px-20 w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
			>
				{requests.map((request, index) => {
					return (
						<Card className="bg-secondary/50">
							<CardHeader>
								<CardTitle>طلب</CardTitle>
							</CardHeader>
							<CardContent>
								<ul>
									<li>نوع الطلب: {goalNames[request.formType]}</li>
									<li>تفاصيل: {request.details}</li>
								</ul>
							</CardContent>
							<CardFooter className="flex-col items-start">
								<p>الحالة:</p>

								{request.requestStatus === 1 ? (
									<p className="bg-green-500/20 text-green-600 min-w-24 flex items-center gap-1.5 p-1.5 rounded">
										مقبول <CheckCheck />
									</p>
								) : request.requestStatus === 2 ? (
									<p className="bg-red-500/20 text-red-600 min-w-24 flex items-center gap-1.5 p-1.5 rounded">
										مرفوض <X />
									</p>
								) : (
									<p className="bg-blue-500/20 text-blue-600 min-w-24 flex items-center gap-1.5 p-1.5 rounded">
										قيد المراجعة <Hourglass />
									</p>
								)}
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</main>
	);
}
