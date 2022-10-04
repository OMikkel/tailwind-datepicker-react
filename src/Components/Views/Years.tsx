import React, { useContext } from "react"
import { addYears, getFormattedDate, startOfYearPeriod } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"

const Years = () => {
	const { selectedDate, showSelectedDate, setSelectedDate, setView, setShowSelectedDate } = useContext(DatePickerContext)
	return (
		<div className="grid w-64 grid-cols-4">
			{[...Array(12)].map((_year, index) => {
				const first = startOfYearPeriod(selectedDate, 10)
				const year = first - 1 + index * 1
				return (
					<span
						key={index}
						className={`hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ${
							showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year ? "bg-blue-700 text-white hover:bg-blue-600" : ""
						} ${index == 0 || index == 11 ? "text-gray-500" : "text-gray-900"}`}
						onClick={() => {
							setSelectedDate(new Date(addYears(selectedDate, year - selectedDate.getFullYear())))
							setView("months")
							setShowSelectedDate(true)
						}}
					>
						{year}
					</span>
				)
			})}
		</div>
	)
}

export default Years
