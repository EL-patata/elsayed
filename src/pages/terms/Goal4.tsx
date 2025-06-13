import { BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { goalNames } from './Form.Menus';

export default function Goal4() {
	return (
		<main dir="rtl" className="min-h-screen bg-white  md:text-xl">
			<section className="max-w-3xl h-full flex flex-col  mx-auto p-4 gap-4">
				<div className=" h-fit flex justify-between items-center w-full p-4 rounded-lg">
					<h1 className="text-rose-700 text-3xl md:text-4xl font-bold flex flex-col  gap-4 py-12">
						<p> الهدف الرابع</p>
						<p>{goalNames[4]}</p>
					</h1>
					<img
						src="/src/assets//images/goal4.jpg"
						className="h-[8rem] w-[8rem] md:w-[13rem]  md:h-[13rem]"
					/>
				</div>

				<p className="text-xl text-center md:text-start">
					كلام ملهوش اي تلاتين عازة
					<br />
					كلام ملهوش اي تلاتين عازة الجزء التاني
				</p>

				<div className="flex flex-col gap-4">
					<h2 className="text-xl md:text-2xl font-semibold text-center md:text-start">
						المشاريع والمبادارات المتعلقة بالفقر
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div className="bg-white shadow-lg p-6 rounded-xl border-r-8 border-green-800 flex flex-col gap-3">
							<h2 className="text-3xl font-bold text-gray-800 bg-green-50 py-4 pr-4 rounded-lg">
								عنوان
							</h2>
							<p className="text-gray-600 mt-4 text-lg leading-relaxed">
								كلام كتير كلام
								<br />
								كتير كلام كتير
							</p>
							<button className="bg-green-600 text-white mt-auto  font-semibold text-sm  px-5 py-2 rounded-lg hover:brightness-105 transition-all">
								معرفة المزيد
							</button>
						</div>

						<div className="bg-white shadow-lg p-6 rounded-xl border-r-8 border-green-800 flex flex-col gap-3">
							<h2 className="text-3xl font-bold text-gray-800 bg-green-50 py-4 pr-4 rounded-lg">
								عنوان
							</h2>
							<p className="text-gray-600 mt-4 text-lg leading-relaxed">
								كلام كتير كلام
								<br />
								كتير كلام كتير كلام كتير كلام
								<br />
								كتير كلام كتير
							</p>
							<button className="bg-green-600 text-white mt-auto  font-semibold text-sm  px-5 py-2 rounded-lg hover:brightness-105 transition-all">
								معرفة المزيد
							</button>
						</div>
					</div>
				</div>

				<div>
					<h2 className="text-xl md:text-2xl font-semibold text-center my-4">
						إحصائيات
					</h2>
					<div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center md:px-20">
						<div className="flex flex-col items-center gap-1.5">
							<BarChart2 className="w-[8rem] h-[8rem]" />
							<p className="font-semibold">300 مشروع</p>
						</div>
						<div className="flex flex-col items-center gap-1.5">
							<p className="h-[8rem] w-[8rem] bg-rose-600 text-white rounded-full grid place-items-center text-4xl font-semibold">
								8%
							</p>
							<p className="font-semibold">معدل</p>
						</div>
					</div>
				</div>

				<div>
					<h2 className="text-xl md:text-2xl font-semibold text-center md:text-start my-4">
						فيديو
					</h2>

					<div>
						{/*
					 video here, this is a placeholder for style purposes.
					 */}
						<div className="aspect-video w-full rounded-xl bg-gradient-to-tr  from-blue-600 via-rose-500 to-purple-600"></div>
					</div>
				</div>

				<Link
					to={'/terms/form?goalId=4'}
					className="bg-green-600 text-white mt-auto  font-semibold text-sm  px-5 py-2 rounded-lg hover:brightness-105 transition-all text-center"
				>
					ملأ البيانات
				</Link>
			</section>
		</main>
	);
}
