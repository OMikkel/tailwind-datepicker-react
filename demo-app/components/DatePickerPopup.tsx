import { NextComponentType, NextPage } from "next"
import { useContext } from "react"
import { addDays, addMonths, dayOfTheWeekOf, firstDateOfMonth, getFormattedDate } from "../utils/date"
import { ButtonClear, ButtonNextMonth, ButtonPrevMonth, ButtonSelectMonth, ButtonToday } from "./Buttons"
import { IDatePickerProps } from "./DatePicker"
import { DatePickerContext } from "./DatePickerProvider"
import Days from "./Days"
import Months from "./Months"

const DatePickerPopup: NextPage<IDatePickerProps> = ({ title, actionButtons }) => {
	const { selectedMonth, selectedYear, view } = useContext(DatePickerContext)

	const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1)
	const start = dayOfTheWeekOf(firstOfMonth, 1, 1)

	return (
		<div className="absolute z-50 pt-2 block">
			<div className="inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
				<div className="">
					{title && <div className="bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold">{title}</div>}
					<div className="flex justify-between mb-2">
						<ButtonPrevMonth />
						<ButtonSelectMonth />
						<ButtonNextMonth />
					</div>
				</div>
				<div className="p-1">
					{view === "days" && <Days start={start} />}
					{view === "months" && <Months />}
					{/* {view === "years" && <Years />}
					{view === "decades" && <Decades />} */}
				</div>
				{actionButtons && (
					<div className="">
						<div className="flex space-x-2 mt-2">
							<ButtonToday />
							<ButtonClear />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default DatePickerPopup
