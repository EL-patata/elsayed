import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useUser } from '@/components/context/user-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Signin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	let isDisabled = true;

	if (email.length !== 0 && password.length !== 0) isDisabled = false;

	const { signin } = useUser();

	return (
		<main
			dir="rtl"
			className="w-screen lg:w-[40vw] h-screen mx-auto p-3 lg:p-10 flex flex-col items-center gap-4 "
		>
			<img
				src="/src/assets/images/logo1.png"
				className="w-24 md:w-48 rounded"
			/>
			<h1 className="text-2xl md:text-4xl font-semibold">تسجيل الدخول</h1>
			<form
				action=""
				className="w-full flex flex-col  gap-4"
				onSubmit={(e) => {
					e.preventDefault();

					signin(email, password);
				}}
			>
				<Label htmlFor="email"> البريد الالكتروني</Label>
				<Input id="email" onChange={(e) => setEmail(e.target.value)} />

				<Label htmlFor="password">كلمة المرور</Label>
				<Input
					id="password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="grid gap-4 self-center">
					<Button disabled={isDisabled} type="submit">
						تسجيل الدخول
					</Button>

					<Link to={'/signup'} className={buttonVariants({ variant: 'ghost' })}>
						انشاء حساب
					</Link>
				</div>
			</form>
		</main>
	);
}
