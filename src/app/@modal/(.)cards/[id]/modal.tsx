"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return createPortal(
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center z-50">
			<dialog
				ref={dialogRef}
				className="w-4/5 max-w-lg h-auto max-h-96 border-0 rounded-xl bg-white p-5 relative flex justify-center items-center text-4xl font-bold"
				onClose={onDismiss}>
				{children}
				<button
					onClick={onDismiss}
					className="absolute top-2.5 right-2.5 w-12 h-12 bg-red-400 bg-transparent hover:bg-red-600 border-0 rounded-2xl cursor-pointer flex justify-center items-center font-bold text-2xl transition-all duration-200 ease-in-out">
					X
				</button>
			</dialog>
		</div>,
		document.getElementById("modal-root")!
	);
}
