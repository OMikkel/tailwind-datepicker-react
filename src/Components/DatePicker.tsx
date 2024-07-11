import clsx from 'clsx';
import React, { forwardRef, useContext, useEffect, useRef } from 'react';
import defaultOptions, { IOptions } from '../Options';
import DatePickerPopup from './DatePickerPopup';
import DatePickerProvider, { DatePickerContext } from './DatePickerProvider';

export interface IDatePickerProps {
  value?: Date;
  options?: IOptions;
  onChange?: (date: Date) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  classNames?: string;
}
const DatePicker: React.FC<IDatePickerProps> = ({
  value,
  children,
  options,
  onChange,
  classNames,
  show,
  setShow,
}) => {
  return (
    <div className={clsx('w-full', classNames)}>
      <DatePickerProvider
        options={options}
        onChange={onChange}
        show={show}
        setShow={setShow}
      >
        <DatePickerMain value={value} options={options}>
          {children}
        </DatePickerMain>
      </DatePickerProvider>
    </div>
  );
};

const DatePickerMain: React.FC<{
  value?: Date;
  options?: IOptions;
}> = ({ value, options: customOptions, children }) => {
  const options = { ...defaultOptions, ...customOptions };
  const { setShow, show } = useContext(DatePickerContext);
  const InputRef = useRef<HTMLInputElement>(null);
  const DatePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(InputRef?.current && DatePickerRef?.current)) {
        return;
      }
      if (
        !InputRef.current.contains(event.target as Node) &&
        !DatePickerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', (event) =>
      handleClickOutside(event),
    );

    return () => {
      document.removeEventListener('mousedown', (event) =>
        handleClickOutside(event),
      );
    };
  }, [DatePickerRef, InputRef, setShow]);

  return (
    <>
      {children ? (
        children
      ) : (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <CalendarIcon />
          </div>
          <Input
            ref={InputRef}
            idProp={options?.inputIdProp}
            valueProp={value}
            nameProp={options?.inputNameProp}
            placeholderProp={options?.inputPlaceholderProp}
            dateFormat={options?.inputDateFormatProp}
          />
        </div>
      )}
      {show && <DatePickerPopup ref={DatePickerRef} />}
    </>
  );
};

const Input = forwardRef<
  HTMLInputElement,
  {
    idProp?: string;
    valueProp?: Date;
    nameProp?: string;
    placeholderProp?: string;
    dateFormat?: Intl.DateTimeFormatOptions;
  }
>((props, ref) => {
  const { setShow, selectedDate, showSelectedDate, options, getFormattedDate } =
    useContext(DatePickerContext);

  const nameProp = props.nameProp || 'date';
  const idProp = props.idProp || nameProp;
  const placeholderProp = props.placeholderProp || 'Select Date';
  const valueProp = props.valueProp;

  const format = props.dateFormat || null;

  return (
    <input
      ref={ref}
      type="text"
      name={nameProp}
      id={idProp}
      className={clsx(
        'block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-9 pr-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
        options?.theme?.input,
      )}
      placeholder={placeholderProp}
      value={
        valueProp
          ? getFormattedDate(valueProp, format)
          : selectedDate && showSelectedDate
          ? getFormattedDate(selectedDate, format)
          : ''
      }
      onFocus={() => setShow(true)}
      readOnly
    />
  );
});
Input.displayName = 'Input';

const CalendarIcon = () => {
  const { options } = useContext(DatePickerContext);
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-5 w-5 text-gray-500 dark:text-gray-400',
        options?.theme?.inputIcon,
      )}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default DatePicker;
