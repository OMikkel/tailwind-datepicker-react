import React, { useContext } from "react"
import { addDays } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"

interface IDaysProps {
	start: number
}

const Days = ({ start }: IDaysProps) => {
	const { selectedDate, changeSelectedDate, showSelectedDate, getFormattedDate, options } = useContext(DatePickerContext)

	const startOfWeek = (new Date(start).getDay() + 6) % 7;
	const weekDays = options.weekDays || [];
	const sortedWeekDays = weekDays.slice(startOfWeek).concat(weekDays.slice(0, startOfWeek));

	return (
		<>
			<div className="grid grid-cols-7 mb-1">
				{sortedWeekDays.map((day, index) => (
					<span key={index} className="h-6 text-sm font-medium leading-6 text-center text-gray-500 dow dark:text-gray-400">
						{day}
					</span>
				))}
			</div>
			<div className="grid w-64 grid-cols-7">
				{[...Array(42)].map((_date, index) => {
					const current = addDays(start, index)
					const day = getFormattedDate(current, { day: "numeric" })
					const month = getFormattedDate(current, { month: "long" })
					const year = getFormattedDate(current, { year: "numeric" })

					// check if date is disabled
					const isDisabled =
						(options?.minDate && new Date(current) < options?.minDate) ||
						(options?.maxDate && new Date(current) > options?.maxDate) ||
						(options?.disabledDates && options.disabledDates.indexOf(new Date(current)) >= 0)

					// check if date is selected
					const isSelectedDate = showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current)

					// check if date is current month/year
					const isCurrentMonthAndYear = month === getFormattedDate(selectedDate, { month: "long" }) && year === getFormattedDate(selectedDate, { year: "numeric" })

					return (
						<span
							key={index}
							className={twMerge(
								"hover:bg-gray-100 dark:hover:bg-gray-600 font-semibold text-sm cursor-pointer text-center leading-9 dark:text-white border-0 block flex-1 rounded-lg",
								isDisabled
									? twMerge("text-gray-500", options?.theme?.disabledText)
									: isSelectedDate
									? twMerge("bg-blue-700 text-white hover:bg-blue-600", options?.theme?.selected)
									: isCurrentMonthAndYear
									? twMerge("text-gray-900", options?.theme?.text)
									: twMerge("text-gray-500", options.theme?.dateOtherMonth),
									""
							)}
							onClick={() => {
								changeSelectedDate("date", new Date(current))
							}}
						>
							{day}
						</span>
					)
				})}
			</div>
		</>
	)
}

export default Days
