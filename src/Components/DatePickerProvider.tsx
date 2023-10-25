import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react"
import { IOptions } from "../Options"
import defaultOptions from "../Options"
import { getFormattedDate as formatDate } from "../Utils/date"

interface IDatePickerContext {
	options: IOptions
	view: Views
	setView: Dispatch<SetStateAction<Views>>
	show: boolean
	setShow: (show: boolean) => void
	selectedDate: Date
	changeSelectedDate: (action: "prev" | "next" | "date" | "today", date: Date) => void
	showSelectedDate: boolean
	setShowSelectedDate: Dispatch<SetStateAction<boolean>>
	selectedMonth: number
	selectedYear: number
	onClear: () => void
	getFormattedDate: (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions | null | undefined) => string
}

export type Views = "days" | "months" | "years" | "decades"

export const DatePickerContext = createContext<IDatePickerContext>({
	options: defaultOptions,
	view: "days",
	setView: () => {},
	show: false,
	setShow: () => {},
	selectedDate: new Date(),
	changeSelectedDate: () => {},
	showSelectedDate: true,
	setShowSelectedDate: () => {},
	selectedMonth: 0,
	selectedYear: 0,
	onClear: () => {},
	getFormattedDate: () => "",
})

interface IDatePickerProviderProps {
	children: ReactElement
	options?: IOptions
	onChange?: (date: Date) => void
	onClear: () => void
	show: boolean
	setShow: (show: boolean) => void
	selectedDateState?: [Date, (date: Date) => void]
}

const DatePickerProvider = ({ children, options: customOptions, onChange, onClear, show, setShow, selectedDateState }: IDatePickerProviderProps) => {
	const options = { ...defaultOptions, ...customOptions }
	const [view, setView] = useState<Views>("days")
	const [selectedDate, setSelectedDate] = selectedDateState || useState<Date>(options?.defaultDate || new Date())
	const [showSelectedDate, setShowSelectedDate] = useState<boolean>(options?.defaultDate !== null)
	const selectedMonth = selectedDate.getMonth()
	const selectedYear = selectedDate.getFullYear()

	const changeSelectedDate = (action: "prev" | "next" | "date" | "today", date: Date) => {
		if (options?.maxDate && date > options.maxDate) return
		if (options?.minDate && date < options.minDate) return
		if (options?.disabledDates && options.disabledDates.indexOf(date) >= 0) return
		setSelectedDate(date)
		setShowSelectedDate(true)
		if (options?.autoHide && view === "days" && action === "date") setShow(false)
		if (onChange) onChange(date)
	}

	const getFormattedDate = (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions | undefined | null) => formatDate(options?.language ? options?.language : "en", date, formatOptions)

	return (
		<DatePickerContext.Provider
			value={{ options, view, setView, show, setShow, selectedDate, changeSelectedDate, showSelectedDate, setShowSelectedDate, selectedMonth, selectedYear, onClear, getFormattedDate }}
		>
			{children}
		</DatePickerContext.Provider>
	)
}

export default DatePickerProvider
