import type { Metadata, Viewport } from "next";
import { Jua } from "next/font/google";
import "../styles/globals.css";
import PreventEvents from "./ui/PreventEvents";

const jua = Jua({
	weight: "400",
	preload: false,
});

export const metadata: Metadata = {
	title: "Keisancard2",
	description: "計算するアプリです",
};

export const viewport: Viewport = {
	themeColor: "#e9c3db",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja" className={`${jua.className}`}>
			<body>
				<PreventEvents />
				<main>{children}</main>
			</body>
		</html>
	);
}
