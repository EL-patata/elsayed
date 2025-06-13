import { useSearchParams } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import NotFound from '../NotFound';
import { useUser } from '@/components/context/user-provider';
import { FormEvent, useState } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { goals } from './Form.Menus';
import { Button } from '@/components/ui/button';

export default function Form() {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('goalId');

	if (!id || +id > 17) return <NotFound />;

	const { user, token } = useUser();

	const options = goals[+id - 1];

	let isDisabled = true;

	const [dropMenu, setDropMenu] = useState('');
	const [details, setDetails] = useState('');

	if (dropMenu.length !== 0 && details.length !== 0) isDisabled = false;

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const res = await fetch(
			'http://localhost:5121/api/Auth/AddSustainableRequest',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					id: '',
					formType: id,
					studentId: user.id,
					studentName: `${user.firstName} ${user.lastName}`,
					dropMinue: dropMenu,
					details,
				}),
			}
		);
	};

	return (
		<main
			dir="rtl"
			className="w-screen lg:w-[40vw]  h-screen mx-auto p-3 lg:p-10 flex flex-col items-center gap-4"
		>
			<div className="flex items-center justify-between w-full">
				<img
					src="/src/assets/images/logo1.png"
					className="w-24 md:w-48 rounded"
				/>

				<img
					src={`/src/assets/images//goal${id}.jpg`}
					className="w-24 md:w-48 rounded"
				/>
			</div>

			<h1 className="text-2xl md:text-4xl font-semibold"></h1>
			<form
				action=""
				className="w-full flex flex-col  gap-4 p-4"
				onSubmit={handleSubmit}
			>
				<Label htmlFor="name">اسم الطالب</Label>
				<Input
					id="name"
					readOnly
					value={`${user?.firstName} ${user?.lastName}`}
				/>

				<Select dir="rtl" onValueChange={setDropMenu}>
					<SelectTrigger className="">
						<SelectValue placeholder="اختر النوع" />
					</SelectTrigger>
					<SelectContent>
						{options.map((option, index) => (
							<SelectItem value={option} key={index}>
								{option}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Label htmlFor="details">التفاصيل</Label>
				<Textarea
					onChange={(e) => setDetails(e.target.value)}
					value={details}
					id="details"
					className="focus-visible:ring-green-600 h-60 resize-none"
				/>

				<div className="grid gap-4 self-center">
					<Button type="submit" disabled={isDisabled}>
						تسليم
					</Button>
				</div>
			</form>
		</main>
	);
}
