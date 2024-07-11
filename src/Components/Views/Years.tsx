import clsx from 'clsx';
import React, { useContext } from 'react';
import { addYears, startOfYearPeriod } from '../../Utils/date';
import { DatePickerContext } from '../DatePickerProvider';

const Years = () => {
  const {
    selectedDate,
    showSelectedDate,
    changeSelectedDate,
    setView,
    getFormattedDate,
    options,
  } = useContext(DatePickerContext);

  const isYearDisabled = (year: number) => {
    const { maxDate, minDate } = options;

    if (minDate && year < minDate.getFullYear()) {
      return true;
    }

    if (maxDate && year > maxDate.getFullYear()) {
      return true;
    }

    return false;
  };

  const first = startOfYearPeriod(selectedDate, 10);

  return (
    <div className="grid w-64 grid-cols-4">
      {[...Array(12)].map((_year, index) => {
        const year = first - 1 + index * 1;
        const disabled = isYearDisabled(year);

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
                [disabledClass]: disabled || index === 0 || index === 11,
                [enabledClass]: !disabled && index !== 0 && index !== 11,
                [selectedClass]:
                  showSelectedDate &&
                  selectedDate.getTime() > 0 &&
                  Number(
                    getFormattedDate(selectedDate, { year: 'numeric' }),
                  ) === year &&
                  !disabled,
              },
            )}
            onClick={() => {
              if (!disabled && index !== 0 && index !== 11) {
                changeSelectedDate(
                  'date',
                  new Date(
                    addYears(selectedDate, year - selectedDate.getFullYear()),
                  ),
                );
                setView('months');
              }
            }}
          >
            {year}
          </span>
        );
      })}
    </div>
  );
};

export default Years;
