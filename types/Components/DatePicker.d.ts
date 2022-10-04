/// <reference types="react" />
export interface IDatePickerProps {
    title?: string;
    actionButtons?: boolean;
    autoHide?: boolean;
}
declare const DatePicker: ({ title, actionButtons }: IDatePickerProps) => JSX.Element;
export default DatePicker;
