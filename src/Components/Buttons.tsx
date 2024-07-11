import clsx from 'clsx';
import React, { useContext } from 'react';
import { goToPrevNext, startOfYearPeriod } from '../Utils/date';
import { DatePickerContext, Views } from './DatePickerProvider';

export const ButtonPrevMonth = () => {
  const { selectedDate, changeSelectedDate, view, options } =
    useContext(DatePickerContext);
  return (
    <button
      type="button"
      className={clsx(
        "bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200",
        options?.theme?.icons,
      )}
      onClick={() =>
        changeSelectedDate(
          'prev',
          new Date(goToPrevNext(view, selectedDate, -1)),
        )
      }
    >
      {options?.icons?.prev ? (
        options?.icons?.prev()
      ) : (
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};

export const ButtonSelectMonth = () => {
  const { selectedDate, view, setView, options, getFormattedDate } =
    useContext(DatePickerContext);

  const calculateView = (): Views => {
    if (view === 'days') {
      return 'months';
    }
    if (view === 'months') {
      return 'years';
    }
    if (view === 'years') {
      return 'decades';
    }
    return view;
  };

  return (
    <button
      type="button"
      className={clsx(
        'rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
        options?.theme?.icons,
      )}
      onClick={() => setView(calculateView())}
    >
      {view === 'days' &&
        getFormattedDate(selectedDate, { month: 'long', year: 'numeric' })}
      {view === 'months' && getFormattedDate(selectedDate, { year: 'numeric' })}
      {view === 'years' &&
        `${startOfYearPeriod(selectedDate, 10)}-${
          startOfYearPeriod(selectedDate, 10) + 9
        }`}
      {view === 'decades' &&
        `${startOfYearPeriod(selectedDate, 100)}-${
          startOfYearPeriod(selectedDate, 100) + 90
        }`}
    </button>
  );
};

export const ButtonNextMonth = () => {
  const { selectedDate, changeSelectedDate, view, options } =
    useContext(DatePickerContext);
  return (
    <button
      type="button"
      className={clsx(
        'rounded-lg bg-white p-2.5 text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white',
        options?.theme?.icons,
      )}
      onClick={() =>
        changeSelectedDate(
          'next',
          new Date(goToPrevNext(view, selectedDate, 1)),
        )
      }
    >
      {options?.icons?.next ? (
        options?.icons?.next()
      ) : (
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};

export const ButtonToday = () => {
  const { changeSelectedDate, setView, options } =
    useContext(DatePickerContext);
  return (
    <button
      type="button"
      className={clsx(
        'w-full rounded-lg bg-blue-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700',
        options?.theme?.todayBtn,
      )}
      onClick={() => {
        changeSelectedDate('today', new Date());
        setView('days');
      }}
    >
      {options?.todayBtnText}
    </button>
  );
};

export const ButtonClear = () => {
  const { setShowSelectedDate, options } = useContext(DatePickerContext);
  return (
    <button
      type="button"
      className={clsx(
        'w-full rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
        options?.theme?.clearBtn,
      )}
      onClick={() => setShowSelectedDate(false)}
    >
      {options?.clearBtnText}
    </button>
  );
};
