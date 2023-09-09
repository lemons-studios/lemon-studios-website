"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Footer } from "./components/footer";

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
			<>
				<main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-top space-y-24 py-12 px-12 md:px-24">
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
					<div>
						<p className="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Projects</p>
						<Link
							href={"https://mission-monkey.lemon-studios.ca/"}
							target="_blank"
						>
							<div className="flex flex-col p-8 bg-zinc-950 w-[calc(100vw-6rem)] sm:w-96 rounded-lg border border-zinc-900 space-y-2 select-none">
								<Image
									src={"/missionmonkey/icon256.png"}
									width={96}
									height={96}
									className="drop-shadow-[0_0_10px_#fff1] hover:drop-shadow-[0_0_10px_#fff2] transition w-20 md:w-28 lg:w-32 rounded-3xl self-center mb-4"
								/>
								<p className="text-xl sm:text-2xl">Mission: Monkey</p>
								<p className="text-gray-400">A game for a school project created by 2 grade 10 students</p>
							</div>
						</Link>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}
