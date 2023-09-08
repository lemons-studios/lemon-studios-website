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
			</head>
			<body className={jost.className}>{children}</body>
		</html>
	);
}
