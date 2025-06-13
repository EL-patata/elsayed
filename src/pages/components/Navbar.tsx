// import { useUser } from '@/components/context/user-provider';
// import { Button, buttonVariants } from '@/components/ui/button';
// import { LayoutDashboard, LogIn, LogOut } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
// 	const { user, logout } = useUser();

// 	const links = [
// 		{
// 			title: 'الرئيسية',
// 			url: '',
// 		},
// 		{
// 			title: 'الخدمات',
// 			url: '#services',
// 		},
// 		{
// 			title: 'تواصل معنا',
// 			url: '#contact-us',
// 		},
// 		{
// 			title: 'عنا',
// 			url: 'about-us',
// 		},
// 	];

// 	return (
// 		<nav
// 			dir="rtl"
// 			className="fixed top-0 left-0 w-full bg-gradient-to-r from-white/70 via-white/60 to-white/70 text-black py-2 px-6 flex justify-between items-center z-50 shadow-lg backdrop-blur-lg border-b border-white/20"
// 		>
// 			<div className="px-40 mx-auto w-full flex justify-between items-center">
// 				<h1 className="cursor-pointer transform transition-transform duration-300 hover:scale-110">
// 					<img
// 						src="src/assets/logo.png"
// 						alt="Logo"
// 						className="h-16 drop-shadow-lg transition-all duration-300 hover:rotate-6"
// 					/>
// 				</h1>

// 				<ul className="flex items-center gap-1 text-lg">
// 					{user.userType == 1
// 						? links.map((item, index) => (
// 								<li key={item.title} className="relative group">
// 									<Link
// 										to={`/${item.url}`}
// 										className={buttonVariants({
// 											variant: 'ghost',
// 										})}
// 									>
// 										{item.title}
// 									</Link>
// 								</li>
// 						  ))
// 						: null}

// 					{user ? (
// 						<li>
// 							<Button onClick={logout}>
// 								لوحة القيادة <LayoutDashboard />
// 							</Button>
// 						</li>
// 					) : null}

// 					{user ? (
// 						<li>
// 							<Button onClick={logout}>
// 								تسجيل خروج
// 								<LogOut />
// 							</Button>
// 						</li>
// 					) : (
// 						<li>
// 							<Link to={'/signin'} className={buttonVariants()}>
// 								تسجيل دخول
// 								<LogIn />
// 							</Link>
// 						</li>
// 					)}
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

import { useUser } from '@/components/context/user-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LayoutDashboard, LogIn, LogOut, Menu, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { user, logout } = useUser();

	const links = [
		{ title: 'الرئيسية', url: '' },
		{ title: 'الخدمات', url: '#services' },
		{ title: 'تواصل معنا', url: '#contact-us' },
		{ title: 'عنا', url: 'about-us' },
	];

	return (
		<nav
			dir="rtl"
			className="fixed top-0 left-0 w-full bg-gradient-to-r from-white/70 via-white/60 to-white/70 text-black py-2 px-6 flex justify-between items-center z-50 shadow-lg backdrop-blur-lg border-b border-white/20"
		>
			<div className="px-4 md:px-40 mx-auto w-full flex justify-between items-center">
				<Link to="/" className="cursor-pointer">
					<img
						src="src/assets/logo.png"
						alt="Logo"
						className="h-16 drop-shadow-lg transition-all duration-300 hover:rotate-6"
					/>
				</Link>

				{/* Desktop Links */}
				<ul className="hidden md:flex items-center gap-1 text-lg">
					{links.map((item) => (
						<li key={item.title}>
							<Link
								to={`/${item.url}`}
								className={buttonVariants({ variant: 'ghost' })}
							>
								{item.title}
							</Link>
						</li>
					))}

					{user?.userType === 0 ? (
						<li>
							<Link to="/dashboard" className={buttonVariants()}>
								لوحة القيادة <LayoutDashboard className="ml-2" />
							</Link>
						</li>
					) : (
						<li>
							<Link to="/my-requests" className={buttonVariants()}>
								مراجعة طلباتي <ScrollText className="ml-2" />
							</Link>
						</li>
					)}

					{user ? (
						<li>
							<Button onClick={logout}>
								تسجيل خروج
								<LogOut className="ml-2" />
							</Button>
						</li>
					) : (
						<li>
							<Link to="/signin" className={buttonVariants()}>
								تسجيل دخول
								<LogIn className="ml-2" />
							</Link>
						</li>
					)}
				</ul>

				{/* Mobile Menu */}
				<Sheet>
					<SheetTrigger asChild>
						<Button size="icon" variant="ghost" className="md:hidden">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-64 flex flex-col gap-4 p-4">
						<h2 className="text-xl font-bold mb-4">القائمة</h2>

						{links.map((item) => (
							<Link
								key={item.title}
								to={`/${item.url}`}
								className={buttonVariants({ variant: 'ghost' })}
							>
								{item.title}
							</Link>
						))}

						{user?.userType === 0 ? (
							<li>
								<Link to="/dashboard" className={buttonVariants()}>
									لوحة القيادة <LayoutDashboard className="ml-2" />
								</Link>
							</li>
						) : (
							<li>
								<Link to="/my-requests" className={buttonVariants()}>
									مراجعة طلباتي <ScrollText className="ml-2" />
								</Link>
							</li>
						)}

						{user ? (
							<Button onClick={logout}>
								تسجيل خروج <LogOut className="ml-2" />
							</Button>
						) : (
							<Link
								to="/signin"
								className={buttonVariants({ variant: 'default' })}
							>
								تسجيل دخول <LogIn className="ml-2" />
							</Link>
						)}
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
