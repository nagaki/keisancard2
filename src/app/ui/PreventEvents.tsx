"use client";

import { useEffect } from "react";

const noEvent = (e: Event | TouchEvent) => {
	e.preventDefault();
};

export default function PreventEvents() {
	useEffect(() => {
		window.addEventListener("touchmove", noEvent, { passive: false });
		window.addEventListener("scroll", noEvent);
	}, []);
	return null;
}
