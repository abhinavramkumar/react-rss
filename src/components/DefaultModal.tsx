import { Modal } from "flowbite-react";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}
export default function DefaultModal({
  open,
  setOpen,
  header,
  body,
  footer,
}: Props) {
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">{body}</div>
      </Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
}
