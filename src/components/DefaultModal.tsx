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
    <>
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
