import Link from "next/link";
import { Icon } from "@iconify/react";

export function Footer() {
	return (
		<div className="h-16 px-4 bg-zinc-950 text-opacity-40 font-light text-white flex justify-between items-center">
			<p>
				©️ 2023 Lemon Studios
				<br />
				<span className="text-sm">
					Website created by{" "}
					<Link
						href={"https://github.com/ChakornK"}
						className="text-blue-400"
						target="_blank"
					>
						@ChakornK
					</Link>
				</span>
			</p>
			<p></p>
			<Link
				href={"https://github.com/lemons-studios/Website"}
				target="_blank"
			>
				<Icon
					icon="bi:github"
					width="24"
					height="24"
				/>
			</Link>
		</div>
	);
}
