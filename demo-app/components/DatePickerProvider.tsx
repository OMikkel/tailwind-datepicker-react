import { NextPage } from "next"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

interface IDatePickerContext {
	view: Views
	setView: Dispatch<SetStateAction<Views>>
	datePickerShow: boolean
	setShowDatePicker: Dispatch<SetStateAction<boolean>>
	selectedDate: Date
	setSelectedDate: Dispatch<SetStateAction<Date>>
	showSelectedDate: boolean
	setShowSelectedDate: Dispatch<SetStateAction<boolean>>
	selectedMonth: number
	selectedYear: number
}

export type Views = "days" | "months" | "years" | "decades"

export const DatePickerContext = createContext<IDatePickerContext>({
	view: "days",
	setView: () => {},
	datePickerShow: false,
	setShowDatePicker: () => {},
	selectedDate: new Date(),
	setSelectedDate: () => {},
	showSelectedDate: true,
	setShowSelectedDate: () => {},
	selectedMonth: 0,
	selectedYear: 0,
})

const DatePickerProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
	const [view, setView] = useState<Views>("days")
	const [datePickerShow, setShowDatePicker] = useState<boolean>(false)
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [showSelectedDate, setShowSelectedDate] = useState<boolean>(true)
	const selectedMonth = selectedDate.getMonth()
	const selectedYear = selectedDate.getFullYear()

	return (
		<DatePickerContext.Provider value={{ view, setView, datePickerShow, setShowDatePicker, selectedDate, setSelectedDate, showSelectedDate, setShowSelectedDate, selectedMonth, selectedYear }}>
			{children}
		</DatePickerContext.Provider>
	)
}

export default DatePickerProvider
