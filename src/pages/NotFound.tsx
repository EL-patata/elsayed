import { buttonVariants } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<main className="w-screen h-screen flex flex-col items-center py-64 gap-4">
			<img
				src="/src/assets/images/logo1.png"
				className="w-24 md:w-48 rounded"
			/>
			<h1 className="text-5xl font-bold text-green-600 flex items-center justify-center gap-2">
				404
				<span className="text-4xl font-semibold text-foreground">
					{' '}
					| not found.
				</span>
			</h1>
			<Link
				to={'/'}
				className={buttonVariants({
					variant: 'ghost',
				})}
			>
				العودة الى الصفحة الرئيسية
			</Link>
		</main>
	);
}
