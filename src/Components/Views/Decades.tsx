import React, { useContext } from "react"
import { addYears, startOfYearPeriod } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"

const Decades = () => {
	const { selectedDate, showSelectedDate, changeSelectedDate, setView, getFormattedDate, options } = useContext(DatePickerContext)
	return (
		<div className="grid w-64 grid-cols-4">
			{[...Array(12)].map((_year, index) => {
				const first = startOfYearPeriod(selectedDate, 100)
				const year = first - 10 + index * 10
				return (
					<span
						key={index}
						className={`hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ${
							showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year
								? twMerge("bg-blue-700 text-white hover:bg-blue-600", options?.theme?.selected)
								: ""
						} ${index == 0 || index == 11 ? twMerge("text-gray-500", options?.theme?.disabledText) : twMerge("text-gray-900", options?.theme?.text)}`}
						onClick={() => {
							changeSelectedDate("date", new Date(addYears(selectedDate, year - selectedDate.getFullYear())))
							setView("years")
						}}
					>
						{year}
					</span>
				)
			})}
		</div>
	)
}

export default Decades
