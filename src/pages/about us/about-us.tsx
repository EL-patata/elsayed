import { Eye, ListChecks, PersonStanding, Send, User } from 'lucide-react';

export default function AboutUs() {
	return (
		<main
			className="max-w-3xl min-h-screen flex flex-col mx-auto p-4 pt-8 gap-4 text-xl "
			dir="rtl"
		>
			{/* header section */}
			<section className="text-center ">
				<h1 className="text-5xl font-bold">رسالتنا</h1>
				<p className="mt-4 font-semibold">عنوان اصغر</p>
			</section>

			{/* lists */}
			<section className="w-full flex flex-col gap-6">
				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-between  ">
						<h2 className="text-4xl font-bold">رؤيتنا</h2>
						<div className="bg-green-50 p-2 rounded-full">
							<Send className="w-12 h-12 p-1"></Send>
						</div>
					</div>

					<p>
						كلام كتير
						<br />
						كلام اكتر بكتير
					</p>
				</div>

				<div className="w-full flex flex-col gap-6">
					<div className="flex items-center justify-between  flex-row-reverse">
						<h2 className="text-4xl font-bold">أهدافنا</h2>
						<div className="bg-green-50 p-2 rounded-full">
							<Eye className="w-12 h-12 p-1"></Eye>
						</div>
					</div>

					<p className="text-end">
						كلام كتير
						<br />
						كلام اكتر بكتير
					</p>
				</div>

				<div className="flex flex-col gap-6">
					<div className="flex items-center justify-between  ">
						<h2 className="text-4xl font-bold">أهدافنا</h2>
						<div className="bg-green-50 p-2 rounded-full">
							<ListChecks className="w-12 h-12 p-1"></ListChecks>
						</div>
					</div>

					<ul className="list-disc">
						<li>النقطة الاولي</li>
						<li>النقطة الثانية</li>
						<li>النقطة الثالثة</li>
					</ul>
				</div>
			</section>

			{/* team */}

			<section className="text-center">
				<h2 className="text-4xl font-bold mb-10">فريقنا</h2>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
					<div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-green-50 w-fit p-2 rounded-full">
								<User className="w-20 h-20 p-1"></User>
							</div>
							<h3>الاسم الاول</h3>
							<p>تفاصيل عن الاسم الاول</p>
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-green-50 w-fit p-2 rounded-full">
								<User className="w-20 h-20 p-1"></User>
							</div>
							<h3>الاسم الثاني</h3>
							<p>تفاصيل عن الاسم الثاني</p>
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-green-50 w-fit p-2 rounded-full">
								<User className="w-20 h-20 p-1"></User>
							</div>
							<h3>الاسم الثالث</h3>
							<p>تفاصيل عن الاسم الثالث</p>
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-green-50 w-fit p-2 rounded-full">
								<User className="w-20 h-20 p-1"></User>
							</div>
							<h3>الاسم الرابع</h3>
							<p>تفاصيل عن الاسم الرابع</p>
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-green-50 w-fit p-2 rounded-full">
								<User className="w-20 h-20 p-1"></User>
							</div>
							<h3>الاسم الخامس</h3>
							<p>تفاصيل عن الاسم الخامس</p>
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-green-50 w-fit p-2 rounded-full">
								<User className="w-20 h-20 p-1"></User>
							</div>
							<h3>الاسم السادس</h3>
							<p>تفاصيل عن الاسم السادس</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
