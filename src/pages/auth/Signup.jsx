import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export default function Signup() {
	return (
		<main
			dir="rtl"
			className="w-screen lg:w-[40vw]  h-screen mx-auto p-3 lg:p-10 flex flex-col items-center gap-4 "
		>
			<img
				src="/src/assets/images/logo1.png"
				className="w-24 md:w-48 rounded"
			/>
			<h1 className="text-2xl md:text-4xl font-semibold">إنشاء حساب</h1>
			<form action="" className="w-full flex flex-col  gap-4 ">
				<Label htmlFor="name">الاسم</Label>
				<Input id="name" />

				<Label htmlFor="email">البريد الالكتروني</Label>
				<Input id="email" />

				<Label htmlFor="code">الكود الجامعي</Label>
				<Input id="code" />

				<Label htmlFor="phone">الهاتف</Label>
				<Input id="phone" />

				<Label htmlFor="password">كلمة المرور</Label>
				<Input id="password" type="password" />

				<div className="grid gap-4 self-center">
					<button className="bg-green-600 text-white mt-auto  font-semibold text-sm  px-5 py-2 rounded-lg hover:brightness-105 transition-all">
						إنشاء حساب
					</button>

					<button className="text-green-600 bg-green-100 mt-auto  font-semibold text-sm  px-5 py-2 rounded-lg hover:brightness-105 transition-all">
						تسجيل الدخول{' '}
					</button>
				</div>
			</form>
		</main>
	);
}
