import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, useContext } from 'react';
import { dayOfTheWeekOf, firstDateOfMonth } from '../Utils/date';
import {
  ButtonClear,
  ButtonNextMonth,
  ButtonPrevMonth,
  ButtonSelectMonth,
  ButtonToday,
} from './Buttons';
import { DatePickerContext } from './DatePickerProvider';
import Days from './Views/Days';
import Decades from './Views/Decades';
import Months from './Views/Months';
import Years from './Views/Years';

const DatePickerPopup = forwardRef<HTMLDivElement>(
  (_props, ref: ForwardedRef<HTMLDivElement>) => {
    const { selectedMonth, selectedYear, view, options } =
      useContext(DatePickerContext);

    const language = options?.language ? options?.language : 'en';
    // @ts-ignore
    const locale = new Intl.Locale(language);

    // @ts-ignore
    const weekStart = locale?.weekInfo?.firstDay || 1;
    const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1);
    const start = dayOfTheWeekOf(firstOfMonth, weekStart, weekStart);

    return (
      <div
        ref={ref}
        className={clsx(
          'absolute top-10 z-50 block pt-2',
          options?.datepickerClassNames,
        )}
      >
        <div
          className={clsx(
            'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700',
            options?.theme?.background,
          )}
        >
          <div>
            {options?.title && (
              <div
                className={clsx(
                  'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
                  options?.theme?.text,
                )}
              >
                {options?.title}
              </div>
            )}
            <div className="mb-2 flex justify-between">
              <ButtonPrevMonth />
              <ButtonSelectMonth />
              <ButtonNextMonth />
            </div>
          </div>
          <div className="p-1">
            {view === 'days' && <Days start={start} />}
            {view === 'months' && <Months />}
            {view === 'years' && <Years />}
            {view === 'decades' && <Decades />}
          </div>
          {(options?.todayBtn || options?.clearBtn) && (
            <div className="mt-2 flex space-x-2">
              {options?.todayBtn && <ButtonToday />}
              {options?.clearBtn && <ButtonClear />}
            </div>
          )}
        </div>
      </div>
    );
  },
);
DatePickerPopup.displayName = 'DatePickerPopup';

export default DatePickerPopup;
