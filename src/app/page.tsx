import Link from "next/link";

export default function Page() {
	let cards = Array.from({ length: 6 }, (_, i) => i + 1);

	return (
		<section className="grid grid-cols-3 gap-4 justify-center items-center p-4 max-w-2xl mx-auto">
			{cards.map((id) => (
				<Link
					className="flex max-sm:w-4/5 justify-center items-center h-48 bg-violet-300 rounded-lg text-black font-bold text-lg max-w-48"
					key={id}
					href={`/cards/${id}`}
					passHref>
					{id}
				</Link>
			))}
		</section>
	);
}
