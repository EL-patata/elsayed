import React from 'react';
import { Home, Users, BarChart3, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import StatCard from '../components/StatCard';
import ActivityCard from '../components/ActivityCard';
import PaymentsCard from '../components/PaymentsCard';
import { useDashboard } from '@/components/context/dashboard-provider';

const DashboardPage = ({
	darkMode,
	apartments,
	totalRentedApartments,
	occupancyRate,
	monthlyRevenue,
}) => {
	const { requests } = useDashboard();

	const stats = [
		{
			title: 'إجمالي عدد الطلبات',
			value: requests.length,
			icon: Home,
			color: 'blue',
		},
	];

	const activities = requests.map((request) => ({
		action: 'تمت اضافة طلب جديد.',
		user: `${request.studentName} `,
	}));

	return (
		<div className="space-y-8">
			<h1
				className={`text-3xl font-bold ${
					darkMode ? 'text-white' : 'text-gray-800'
				}`}
			>
				نظرة عامة على لوحة التحكم
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2  gap-6">
				{stats.map((stat, idx) => (
					<StatCard key={idx} stat={stat} darkMode={darkMode} />
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<ActivityCard activities={activities} darkMode={darkMode} />
				{/* <PaymentsCard apartments={apartments} darkMode={darkMode} /> */}
			</div>
		</div>
	);
};

export default DashboardPage;
