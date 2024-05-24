export default function CardPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div className="flex justify-center items-center h-48 bg-violet-300 rounded-lg text-black font-bold text-lg max-w-48">
			{id}
		</div>
	);
}
