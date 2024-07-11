import clsx from 'clsx';
import React, { useContext } from 'react';
import { addYears, startOfYearPeriod } from '../../Utils/date';
import { DatePickerContext } from '../DatePickerProvider';

const Decades = () => {
  const {
    selectedDate,
    showSelectedDate,
    changeSelectedDate,
    setView,
    getFormattedDate,
    options,
  } = useContext(DatePickerContext);

  const isDecadeDisabled = (year: number) => {
    const { minDate, maxDate } = options;

    if (
      minDate &&
      year < Number(getFormattedDate(minDate, { year: 'numeric' }))
    ) {
      return true;
    }

    if (
      maxDate &&
      year > Number(getFormattedDate(maxDate, { year: 'numeric' }))
    ) {
      return true;
    }

    return false;
  };

  const first = startOfYearPeriod(selectedDate, 100);

  return (
    <div className="grid w-64 grid-cols-4">
      {[...Array(12)].map((_year, index) => {
        const year = first - 10 + index * 10;
        const disabled = isDecadeDisabled(year) || index === 0 || index === 11;

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
                  Number(
                    getFormattedDate(selectedDate, { year: 'numeric' }),
                  ) === year &&
                  !disabled,
              },
            )}
            onClick={() => {
              if (!disabled) {
                changeSelectedDate(
                  'date',
                  new Date(
                    addYears(selectedDate, year - selectedDate.getFullYear()),
                  ),
                );
                setView('years');
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

export default Decades;
