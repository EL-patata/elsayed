import { useSearchParams } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

export default function Form() {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('goalId');

	console.log(id);

	if (!id || +id > 12) return <div>not found</div>;

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
					src={`/src/assets/images//goal${id}.png`}
					className="w-24 md:w-48 rounded"
				/>
			</div>

			<h1 className="text-2xl md:text-4xl font-semibold"></h1>
			<form action="" className="w-full flex flex-col  gap-4 p-4">
				<Label htmlFor="one">الحقل الاول</Label>
				<Input id="one" />

				<Label htmlFor="two">الحقل الثاني</Label>
				<Input id="two" />

				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
					<div>
						<Label htmlFor="one">الحقل الثالث</Label>
						<Input id="one" />
					</div>
					<div>
						<Label htmlFor="two">الحقل الرابع</Label>
						<Input id="two" />
					</div>
				</div>

				<Label htmlFor="three">الحقل الخامس</Label>
				<Textarea
					id="three"
					className="focus-visible:ring-green-600 h-60 resize-none"
				/>

				<div className="grid gap-4 self-center">
					<button className="bg-green-600 text-white mt-auto  font-semibold text-sm  px-5 py-2 rounded-lg hover:brightness-105 transition-all">
						تسليم{' '}
					</button>
				</div>
			</form>
		</main>
	);
}
