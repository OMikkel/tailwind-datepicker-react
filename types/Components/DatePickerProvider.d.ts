import React, { Dispatch, ReactNode, SetStateAction } from "react";
interface IDatePickerContext {
    view: Views;
    setView: Dispatch<SetStateAction<Views>>;
    datePickerShow: boolean;
    setShowDatePicker: Dispatch<SetStateAction<boolean>>;
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
    showSelectedDate: boolean;
    setShowSelectedDate: Dispatch<SetStateAction<boolean>>;
    selectedMonth: number;
    selectedYear: number;
}
export declare type Views = "days" | "months" | "years" | "decades";
export declare const DatePickerContext: React.Context<IDatePickerContext>;
declare const DatePickerProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
export default DatePickerProvider;
