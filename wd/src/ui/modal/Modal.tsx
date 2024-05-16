import React, { MutableRefObject, ReactNode,forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useMousePosition from '../../libs/hooks/useMousePosition';


const Modal = forwardRef(function Modal(props: {children: ReactNode}, ref) {

  const [mouseCoord, setMouseCoord] = useState<{x: number; y: number}>({x: 0, y: 0})
  const [dialogRect, setDialogRect] = useState<{ bottom: number, height: number, left: number, right: number, top: number, width: number, x: number, y: number} | null>(null);

  const dialog: MutableRefObject<HTMLDialogElement> =
    useRef() as MutableRefObject<HTMLDialogElement>;

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
        const rect = dialog.current.getBoundingClientRect();
        setDialogRect(rect);
      },
    };
  });
  const coord = useMousePosition();
  useEffect(() => {setMouseCoord(coord)}, [coord]);

  const dialogClickHandler = () => {
    const rect = dialogRect;
    const mouse = mouseCoord;
    if (rect && mouse) {
      const isInDialog =
        rect.top <= mouse.y &&
        mouse.y <= rect.top + rect.height &&
        rect.left <= mouse.x &&
        mouse.x <= rect.left + rect.width;
        if (!isInDialog) dialog.current.close();
    }
  }

  return createPortal(
    <dialog onClick={dialogClickHandler} className='m-auto' ref={dialog}>
      <form method='dialog'>
        <button>Close</button>
      </form>
        {props.children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
})

export default Modal