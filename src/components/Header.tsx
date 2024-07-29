import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const Header = () => {
	return (
		<header className="w-full flex flex-row py-4 px-3 justify-between align-middle bg-black">
			<Menu>
				<MenuButton></MenuButton>
				<MenuItems as="section">
					<MenuItem as="a" className="bg-slate-200"></MenuItem>
				</MenuItems>
			</Menu>
		</header>
	);
};

export default Header;
