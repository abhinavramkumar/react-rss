import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import classNames from "classnames";
interface IProps {
  children: JSX.Element | JSX.Element[];
}

const NotificationContext = React.createContext<{
  notify: (args: { type: "success" | "failure"; text: string }) => void;
}>({
  notify: (args) => {},
});

const NotificationContextProvider = ({ children }: IProps) => {
  function notify({
    type,
    text,
  }: {
    type: "success" | "failure";
    text: string;
  }) {
    toast((t) => (
      <div className="toast toast-end toast-middle">
        <div
          className={classNames(
            "alert",
            type === "success" ? "alert-success" : "alert-error"
          )}
        >
          <span>{text}</span>
        </div>
        <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
      </div>
    ));
  }

  return (
    <NotificationContext.Provider
      value={{
        notify,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const GetNotficationContext = () => {
  try {
    const { notify } = useContext(NotificationContext);
    return { notify };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default NotificationContextProvider;
