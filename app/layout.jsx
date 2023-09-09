import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
	title: "Lemon Studios",
	description: "Very cool website lol"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* HTML Meta Tags */}
				<title>Lemon Studios</title>
				<meta
					name="description"
					content="Very cool website lol"
				/>

				{/* Facebook Meta Tags */}
				<meta
					property="og:url"
					content="https://lemon-studios.ca/"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:title"
					content="Lemon Studios"
				/>
				<meta
					property="og:description"
					content="Very cool website lol"
				/>
				<meta
					property="og:image"
					content="https://lemon-studios.ca/logo.png"
					width="64"
					height="64"
				/>

				{/* Twitter Meta Tags */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					property="twitter:domain"
					content="lemon-studios.ca"
				/>
				<meta
					property="twitter:url"
					content="https://lemon-studios.ca/"
				/>
				<meta
					name="twitter:title"
					content="Lemon Studios"
				/>
				<meta
					name="twitter:description"
					content="Very cool website lol"
				/>
				<meta
					name="twitter:image"
					content="https://lemon-studios.ca/logo.png"
					width="64"
					height="64"
				/>
			</head>
			<body className={jost.className}>{children}</body>
		</html>
	);
}
