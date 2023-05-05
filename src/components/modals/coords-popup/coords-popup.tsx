import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './coords-popup.module.scss';
const modalsContainer = document.querySelector('#modalsContainer');

type TCoordsPopup = {
  pageX: number
  pageY: number
  children: React.ReactNode
  onOverlayClick: () => void
} & React.HTMLProps<HTMLDivElement>;

export const CoordsPopup = ({ pageX, pageY, onOverlayClick, children, ...props }: TCoordsPopup) => {
  const tongueRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [tongueHeight, setTongueHeight] = useState(0);
  const [tongueWidth, setTongueWidth] = useState(0);

  useEffect(() => {
    if (wrapperRef.current != null) {
      setHeight(wrapperRef.current.offsetHeight);
      setWidth(wrapperRef.current.offsetWidth);
    }
    if (tongueRef.current != null) {
      setTongueHeight(tongueRef.current.offsetHeight);
      setTongueWidth(tongueRef.current.offsetWidth);
    }
  }, [wrapperRef, tongueRef, height, pageX, pageY]);

  return (modalsContainer != null)
    ? createPortal(
        <>
          <div className={style.wrapper} ref={wrapperRef} style={{ left: pageX - width + tongueWidth, top: pageY + tongueHeight }} {...props}>
            <div className={style.content}>
              <div className={style.tongue} ref={tongueRef} style={{ top: `-${tongueHeight}px` }} />
              {children}
            </div>
          </div>
          <div className={style.overlay} onClick={onOverlayClick} />
        </>,
        modalsContainer,
    )
    : null;
};
