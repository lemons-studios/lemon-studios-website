"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.querySelectorAll("img").forEach((img) => {
			img.setAttribute("draggable", "false");
		});
	}
	render() {
		return (
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="flex flex-col items-center space-y-4">
					<Image
						src={"/logo-outline.svg"}
						width={128}
						height={128}
						className="drop-shadow-[0_0_10px_#fff8]"
					/>
					<p className="text-6xl drop-shadow-[0_0_10px_#fff4]">Lemon Studios</p>
					<p className="text-gray-300 text-center">
						Self-Proclaimed Indie game studio created by{""}
						<Link
							href={"https://github.com/Shob3r"}
							target="_blank"
							className="hover:bg-gray-900 transition rounded-md p-0.5 mx-0.5"
						>
							@Shob3r
						</Link>
						<br />
						Currently developing
						<Link
							href={"https://github.com/lemons-studios/Mission-Monkey"}
							target="_blank"
							className="hover:bg-gray-900 transition rounded-md p-0.5 mx-0.5"
						>
							Mission: Monkey
						</Link>
					</p>
				</div>
			</main>
		);
	}
}
