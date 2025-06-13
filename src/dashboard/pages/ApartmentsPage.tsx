import { useDashboard } from '@/components/context/dashboard-provider';
import { Button } from '@/components/ui/button';
import { goalNames } from '@/pages/terms/Form.Menus';
import React from 'react';

const ApartmentsTable = ({ apartments, darkMode }) => {
	const { requests, reviewRequest } = useDashboard();

	return (
		<div className="overflow-x-auto">
			<table className="w-full">
				<thead className={darkMode ? 'bg-gray-700/50' : 'bg-gray-50/50'}>
					<tr>
						<th
							className={`px-6 py-4 text-right text-sm font-medium ${
								darkMode ? 'text-gray-300' : 'text-gray-500'
							}`}
						>
							اسم الطالب
						</th>
						<th
							className={`px-6 py-4 text-right text-sm font-medium ${
								darkMode ? 'text-gray-300' : 'text-gray-500'
							}`}
						>
							نوع الطلب
						</th>
						<th
							className={`px-6 py-4 text-right text-sm font-medium ${
								darkMode ? 'text-gray-300' : 'text-gray-500'
							}`}
						>
							تفاصيل
						</th>
						<th
							className={`px-6 py-4 text-right text-sm font-medium ${
								darkMode ? 'text-gray-300' : 'text-gray-500'
							}`}
						>
							الحالة
						</th>
						<th
							className={`px-6 py-4 text-right text-sm font-medium ${
								darkMode ? 'text-gray-300' : 'text-gray-500'
							}`}
						>
							الإجراءات
						</th>
					</tr>
				</thead>
				<tbody
					className={`divide-y ${
						darkMode ? 'divide-gray-700' : 'divide-gray-100'
					}`}
				>
					{requests.map((request, index) => {
						return (
							<tr key={index}>
								<td>{request.studentName}</td>
								<td>{goalNames[request.formType]}</td>
								<td>{request.details}</td>
								<td>قيض المراجعة</td>
								<td className="px-6 py-4">
									<button
										onClick={() => reviewRequest(request.requestId, 1)}
										className={`px-3 py-1 rounded-full text-sm font-medium ${
											darkMode
												? 'bg-green-900/30 text-green-400'
												: 'bg-green-50 text-green-700'
										}`}
									>
										قبول
									</button>
									<button
										onClick={() => reviewRequest(request.requestId, 2)}
										className={`px-3 py-1 rounded-full text-sm font-medium ${
											darkMode
												? 'bg-red-900/30 text-red-400'
												: 'bg-red-50 text-red-700'
										}`}
									>
										رفض
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ApartmentsTable;
