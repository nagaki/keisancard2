import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";

const noEvent = (e: Event | TouchEvent) => {
	e.preventDefault();
};

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		window.addEventListener("touchmove", noEvent, { passive: false });
		window.addEventListener("scroll", noEvent);
	});
	return <Component {...pageProps} />;
}

export default MyApp;
