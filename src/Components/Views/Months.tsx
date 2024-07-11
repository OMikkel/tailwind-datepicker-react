import clsx from 'clsx';
import React, { useContext } from 'react';
import { addMonths } from '../../Utils/date';
import { DatePickerContext } from '../DatePickerProvider';

const Months = () => {
  const {
    selectedDate,
    showSelectedDate,
    changeSelectedDate,
    getFormattedDate,
    setView,
    options,
  } = useContext(DatePickerContext);

  const isMonthDisabled = (monthIndex: number) => {
    const { minDate, maxDate } = options;
    const currentYear = selectedDate.getFullYear();
    const monthDate = new Date(currentYear, monthIndex, 1);

    if (
      minDate &&
      monthDate < new Date(minDate.getFullYear(), minDate.getMonth(), 1)
    ) {
      return true;
    }

    if (
      maxDate &&
      monthDate > new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className="grid w-64 grid-cols-4">
      {[...Array(12)].map((_month, index) => {
        const month = getFormattedDate(
          new Date(selectedDate.getFullYear(), index),
          { month: 'short' },
        );
        const disabled = isMonthDisabled(index);
        const selectedClass = clsx(
          'bg-blue-700 text-white hover:bg-blue-600',
          options?.theme?.selected,
        );

        const enabledClass = clsx(
          'cursor-pointer text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          options?.theme?.text,
        );

        const disabledClass = clsx(
          'cursor-not-allowed text-gray-500',
          options?.theme?.disabledText,
        );
        return (
          <span
            key={index}
            className={clsx(
              'block flex-1 rounded-lg border-0 text-center text-sm font-semibold leading-9',
              {
                [disabledClass]: disabled,
                [enabledClass]: !disabled,
                [selectedClass]:
                  showSelectedDate &&
                  selectedDate.getTime() > 0 &&
                  getFormattedDate(selectedDate, { month: 'short' }) ===
                    month &&
                  !disabled,
              },
            )}
            onClick={() => {
              if (!disabled) {
                changeSelectedDate(
                  'date',
                  new Date(
                    addMonths(selectedDate, index - selectedDate.getMonth()),
                  ),
                );
                setView('days');
              }
            }}
          >
            {month}
          </span>
        );
      })}
    </div>
  );
};

export default Months;
