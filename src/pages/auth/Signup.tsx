import { useUser } from '@/components/context/user-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp';

export default function Signup() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [OTP, setOTP] = useState('');

	let isDiabled = true;

	const { signup, verifyEmail, isDialogOpen } = useUser();

	if (OTP.length === 6) verifyEmail(email, OTP);

	if (
		name.trim().length > 0 &&
		lastName.trim().length > 0 &&
		email.trim().length > 0 &&
		password.trim().length > 0
	) {
		isDiabled = false;
	}

	return (
		<main
			dir="rtl"
			className="w-screen lg:w-[40vw] h-screen mx-auto p-3 lg:p-10 flex flex-col items-center gap-4"
		>
			<img
				src="/src/assets/images/logo1.png"
				className="w-24 md:w-48 rounded"
			/>
			<h1 className="text-2xl md:text-4xl font-semibold">إنشاء حساب</h1>
			<form
				className="w-full flex flex-col gap-4"
				onSubmit={(e) => {
					e.preventDefault();
					signup(name, lastName, email, password, 99999999);
				}}
			>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<Label htmlFor="name">الاسم</Label>
						<Input
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<Label htmlFor="last_name">اسم العائلة</Label>
						<Input
							id="last_name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>

				<Label htmlFor="email">البريد الالكتروني</Label>
				<Input
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Label htmlFor="password">كلمة المرور</Label>
				<Input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="grid gap-4 self-center">
					<Button type="submit" disabled={isDiabled}>
						انشاء حساب
					</Button>
					<Link to="/signin" className={buttonVariants({ variant: 'outline' })}>
						تسجيل الدخول
					</Link>
				</div>
			</form>
			<AlertDialog open={isDialogOpen}>
				<AlertDialogContent className="items-center justify-center">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-center">
							تأكيد الحساب
						</AlertDialogTitle>
						<AlertDialogDescription className="text-center">
							ادخل الكود المرسل الى بريدك الالكتروني لتأكيد الحساب.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<InputOTP
						maxLength={6}
						value={OTP}
						onChange={(value) => setOTP(value)}
					>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSeparator />
							<InputOTPSlot index={1} />
							<InputOTPSeparator />
							<InputOTPSlot index={2} />
							<InputOTPSeparator />
							<InputOTPSlot index={3} />
							<InputOTPSeparator />
							<InputOTPSlot index={4} />
							<InputOTPSeparator />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</AlertDialogContent>
			</AlertDialog>
		</main>
	);
}
