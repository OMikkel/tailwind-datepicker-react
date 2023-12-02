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
	getFormattedDate: () => "",
})

interface IDatePickerProviderProps {
	children: ReactElement
	options?: IOptions
	onChange?: (date: Date) => void
	show: boolean
	setShow: (show: boolean) => void
	selectedDateState?: [Date, (date: Date) => void]
}

const DatePickerProvider = ({ children, options: customOptions, onChange, show, setShow, selectedDateState }: IDatePickerProviderProps) => {
	const options = { ...defaultOptions, ...customOptions }
	const [view, setView] = useState<Views>("days")
	const [selectedDate, setSelectedDate] = selectedDateState || useState<Date>(options?.defaultDate || new Date())
	const [showSelectedDate, setShowSelectedDate] = useState<boolean>(options?.defaultDate !== null)
	const selectedMonth = selectedDate.getMonth()
	const selectedYear = selectedDate.getFullYear()

	const changeSelectedDate = (action: "prev" | "next" | "date" | "today", date: Date) => {
		let compareDate = new Date(0)
		if (action === "today" || action === "date") {
			compareDate = date
		} else {
			switch (view) {
				case "days":
					if (action === "prev") compareDate.setFullYear(date.getFullYear(), date.getMonth() + 1, 0) // Last day of the month
					if (action === "next") compareDate.setFullYear(date.getFullYear(), date.getMonth(), 1) // First day of the month
					break
				case "months":
					if (action === "prev") compareDate.setFullYear(date.getFullYear(), 12, 0) // December 31st
					if (action === "next") compareDate.setFullYear(date.getFullYear(), 0, 1) // January 1st
					break
				case "years":
					if (action === "prev") compareDate.setFullYear(Math.floor(date.getFullYear() / 10) * 10 + 9, 12, 0) // December 31st, ???9
					if (action === "next") compareDate.setFullYear(Math.floor(date.getFullYear() / 10) * 10, 0, 1) // January 1st, ???0
					break
				case "decades":
					if (action === "prev") compareDate.setFullYear(Math.floor(date.getFullYear() / 100) * 100 + 99, 12, 0) // December 31st, ??99
					if (action === "next") compareDate.setFullYear(Math.floor(date.getFullYear() / 100) * 100, 0, 1) // January 1st, ??00
					break
			}
		}
		if (options?.maxDate && compareDate >= options.maxDate) return
		if (options?.minDate && compareDate <= options.minDate) return
		if (options?.disabledDates && options.disabledDates.indexOf(date) >= 0) return
		if (options?.maxDate && date > options.maxDate) {
			setSelectedDate(new Date(options.maxDate.toString()))
		} else if (options?.minDate && date < options.minDate) {
			setSelectedDate(new Date(options.minDate.toString()))
		} else {
			setSelectedDate(date)
		}
		setShowSelectedDate(true)
		if (options?.autoHide && view === "days" && action === "date") setShow(false)
		if (onChange) onChange(date)
	}

	const getFormattedDate = (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions | undefined | null) => formatDate(options?.language ? options?.language : "en", date, formatOptions)

	return (
		<DatePickerContext.Provider
			value={{ options, view, setView, show, setShow, selectedDate, changeSelectedDate, showSelectedDate, setShowSelectedDate, selectedMonth, selectedYear, getFormattedDate }}
		>
			{children}
		</DatePickerContext.Provider>
	)
}

export default DatePickerProvider
