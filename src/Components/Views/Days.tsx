import React, { useContext } from "react"
import { addDays, getFormattedDate } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"

interface IDaysProps {
	start: number
}

const Days = ({ start }: IDaysProps) => {
	const weekDays: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
	const { selectedDate, setSelectedDate, showSelectedDate, setShowSelectedDate } = useContext(DatePickerContext)
	return (
		<>
			<div className="grid grid-cols-7 mb-1">
				{weekDays.map((day, index) => (
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
					return (
						<span
							key={index}
							className={`hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ${
								showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current) ? "bg-blue-700 text-white hover:bg-blue-600" : ""
							} ${month == getFormattedDate(selectedDate, { month: "long" }) && year == getFormattedDate(selectedDate, { year: "numeric" }) ? "text-gray-900" : "text-gray-500"}`}
							onClick={() => {
								setSelectedDate(new Date(current))
								setShowSelectedDate(true)
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
