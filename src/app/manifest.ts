import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "計算カードのようなアプリ",
		short_name: "計算カード２",
		theme_color: "#e9c3db",
		background_color: "#2196f3",
		display: "standalone",
		orientation: "portrait",
		scope: "/",
		start_url: "/",
		icons: [
			{
				src: "favicon.ico",
				sizes: "64x64 32x32 24x24 16x16",
				type: "image/x-icon",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
