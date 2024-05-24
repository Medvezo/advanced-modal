import { Modal } from "./modal";

export default function CardModal({
	params: { id: cardId },
}: {
	params: { id: string };
}) {
	return <Modal>{cardId}</Modal>;
}
