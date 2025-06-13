import React from 'react';
import { Link } from 'react-router-dom';

const GoalsGrid = () => {
	// قائمة الصور
	const images = [
		'src/assets/images/goal1.jpg',
		'src/assets/images/goal2.jpg',
		'src/assets/images/goal3.jpg',
		'src/assets/images/goal4.jpg',
		'src/assets/images/goal5.jpg',
		'src/assets/images/goal6.jpg',
		'src/assets/images/goal7.jpg',
		'src/assets/images/goal8.jpg',
		'src/assets/images/goal9.jpg',
		'src/assets/images/goal10.jpg',
		'src/assets/images/goal11.jpg',
		'src/assets/images/goal12.jpg',
		'src/assets/images/goal13.jpg',
		'src/assets/images/goal14.jpg',
		'src/assets/images/goal15.jpg',
		'src/assets/images/goal16.jpg',
		'src/assets/images/goal17.jpg',
	];

	return (
		<div className="container mx-auto px-10 py-10" dir="rtl">
			<h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
				Sustainability Goals
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{images.map((src, index) => (
					<Link
						to={`/terms/${index + 1}`}
						key={index}
						className="bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform"
					>
						<img
							src={src}
							alt={`Image ${index + 1}`}
							className="w-80 h-fit object-cover rounded-lg"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default GoalsGrid;
