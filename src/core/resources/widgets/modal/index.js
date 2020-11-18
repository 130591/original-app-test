import React, {
  useState,
  forwardRef,
  createContext,
  useImperativeHandle
} from "react";
import ReactDOM from "react-dom";


const Modal = (props, ref) => {
  const [isActive, setIsActive] = useState(false);

  function toggleModal() {
    if (isActive === true) setIsActive(false);

    if (isActive === false) {
      setIsActive(true);
    }
  }

  useImperativeHandle(ref, () => ({
    toggleModal
  }));

  const ContextProvider = createContext(
    toggleModal
  );

  const { children } = props;

  return isActive
    ? ReactDOM.createPortal(
        <ContextProvider.Provider value={toggleModal}>
          <div className="c-modal">
            <div className="c-modal__overlay" id="modal">
              <div className="c-modal__dialog">
                {children}
              </div>
            </div>
          </div>
        </ContextProvider.Provider>,
        document.body
      )
    : null;
};

export default forwardRef(Modal);
