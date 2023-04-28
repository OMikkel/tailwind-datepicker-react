import React, { useContext } from "react"
import { addMonths } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"

const Months = () => {
	const { selectedDate, showSelectedDate, changeSelectedDate, getFormattedDate, setView, options } = useContext(DatePickerContext)
	return (
		<div className="grid w-64 grid-cols-4">
			{[...Array(12)].map((_month, index) => {
				const month = getFormattedDate(new Date(selectedDate.getFullYear(), index), { month: "short" })
				return (
					<span
						key={index}
						className={`hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm text-gray-900 ${
							showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate, { month: "short" }) === month
								? twMerge("bg-blue-700 text-white hover:bg-blue-600", options?.theme?.selected)
								: ""
						} ${twMerge(options?.theme?.text)}`}
						onClick={() => {
							changeSelectedDate("date", new Date(addMonths(selectedDate, index - selectedDate.getMonth())))
							setView("days")
						}}
					>
						{month}
					</span>
				)
			})}
		</div>
	)
}

export default Months
