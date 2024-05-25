import React, { useEffect, useState, useRef } from 'react';
import classes from './CustomSelect.module.scss';

type CustomSelect = {
  options: Array<string>,
  selected: string
  onChange: (val: string) => void,
}

const CustomSelect = (props: CustomSelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selected);
  const [dialogRect, setDialogRect] = useState<{
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
  } | null>(null);


const selectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialogClickHandler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const rect = dialogRect;
      if (rect && x && y) {
        const isInDialog =
          rect.top <= y &&
          y <= rect.top + rect.height &&
          rect.left <= x &&
          x <= rect.left + rect.width;
        if (!isInDialog) setIsOpen(false);
      }
    };

    const handleWindowClick = (e: MouseEvent) => {
      dialogClickHandler(e);
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [dialogRect]);

  useEffect(() => {
    if (isOpen) {
      const rect = selectListRef.current?.getBoundingClientRect();
      if (rect) setDialogRect(rect);
    }
  }, [isOpen]);
  

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
    props.onChange(option as string);
  };

  return (
    <div className={`${classes['custom-select']}`}>
      <div
        ref={selectListRef}
        className={`${classes['custom-selected']}`}
        onClick={toggleSelect}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div className={`${classes['select-items']}`}>
          {props.options.map((option, index) => (
            <div key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
