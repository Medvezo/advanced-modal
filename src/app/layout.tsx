import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Advanced Modal",
	description:
		"Testing Parallel and Intercepting routes of Next.js by sample advanced routing modal",
};

export default function RootLayout(props: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html>
			<body className={inter.className}>
				{props.children}
				{props.modal}
				<div id="modal-root" />
			</body>
		</html>
	);
}
