import React from 'react';

const cards = [
	{
		id: 1,
		title: 'الاستدامة البيئية',
		description:
			'نحن نسعى لتطوير استراتيجيات للحفاظ على البيئة وتحقيق التنمية المستدامة.',
		image: 'src/assets/images/Untitled1.png',
	},
	{
		id: 2,
		title: 'الطاقة المتجددة',
		description:
			'تعزيز استخدام مصادر الطاقة النظيفة والمتجددة لضمان مستقبل أخضر.',
		image: 'src/assets/images/Untitled2.png',
	},
	{
		id: 3,
		title: 'التعليم والتطوير',
		description:
			'توفير برامج تدريبية متخصصة لتطوير مهارات الأفراد في مجالات الاستدامة.',
		image: 'src/assets/images/Untitled3.png',
	},
	{
		id: 4,
		title: 'المسؤولية الاجتماعية',
		description: 'تعزيز المبادرات الاجتماعية التي تهدف إلى تحسين جودة الحياة.',
		image: 'src/assets/images/Untitled4.png',
	},
	{
		id: 5,
		title: 'الاقتصاد الأخضر',
		description:
			'تعزيز الأنشطة الاقتصادية المستدامة التي تحافظ على الموارد الطبيعية.',
		image: 'src/assets/images/Untitled5.png',
	},
	{
		id: 6,
		title: 'الابتكار والتكنولوجيا',
		description:
			'تطوير حلول تقنية مبتكرة تدعم التنمية المستدامة وتقلل من التلوث.',
		image: 'src/assets/images/Untitled3.png',
	},
	{
		id: 8,
		title: 'الاستدامة البيئية',
		description:
			'نحن نسعى لتطوير استراتيجيات للحفاظ على البيئة وتحقيق التنمية المستدامة.',
		image: 'src/assets/images/Untitled1.png',
	},
	{
		id: 7,
		title: 'الطاقة المتجددة',
		description:
			'تعزيز استخدام مصادر الطاقة النظيفة والمتجددة لضمان مستقبل أخضر.',
		image: 'src/assets/images/Untitled2.png',
	},
];

const CardGrid = () => {
	return (
		<div className="container mx-auto px-4 py-10">
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
				مجالات الاستدامة
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{cards.map((card) => (
					<div
						key={card.id}
						className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
					>
						<img
							src={card.image}
							alt={card.title}
							className="w-full h-40 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
							<p className="text-gray-600 mt-2">{card.description}</p>
							<button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
								اعرف أكثر
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardGrid;
