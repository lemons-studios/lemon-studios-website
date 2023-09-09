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
			<main className="flex min-h-screen flex-col items-center justify-between py-24 px-12 md:px-24">
				<div className="flex flex-col items-center space-y-4">
					<Image
						src={"/logo-outline.svg"}
						width={128}
						height={128}
						className="drop-shadow-[0_0_10px_#fff8] w-20 md:w-28 lg:w-32"
					/>
					<p className="text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_10px_#fff4] text-center">Lemon Studios</p>
					<p className="text-gray-300 text-center [line-height:2em!important] text-sm md:text-base">
						Self-Proclaimed Indie game studio created by{""}
						<Link
							href={"https://github.com/Shob3r"}
							target="_blank"
							className="hover:bg-gray-700 bg-gray-900 transition rounded-md px-1.5 py-0.5 mx-0.5"
						>
							@Shob3r
						</Link>
						<br />
						Currently developing
						<Link
							href={"https://github.com/lemons-studios/Mission-Monkey"}
							target="_blank"
							className="hover:bg-gray-700 bg-gray-900 transition rounded-md px-1.5 py-0.5 mx-0.5"
						>
							Mission: Monkey
						</Link>
					</p>
				</div>
			</main>
		);
	}
}
