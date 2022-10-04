import { forwardRef, useContext } from "react"
import { dayOfTheWeekOf, firstDateOfMonth } from "../utils/date"
import { ButtonClear, ButtonNextMonth, ButtonPrevMonth, ButtonSelectMonth, ButtonToday } from "./Buttons"
import { IDatePickerProps } from "./DatePicker"
import { DatePickerContext } from "./DatePickerProvider"
import Days from "./Views/Days"
import Decades from "./Views/Decades"
import Months from "./Views/Months"
import Years from "./Views/Years"

const DatePickerPopup = forwardRef<HTMLDivElement, IDatePickerProps>(({ title, actionButtons }: IDatePickerProps, ref) => {
	const { selectedMonth, selectedYear, view } = useContext(DatePickerContext)

	const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1)
	const start = dayOfTheWeekOf(firstOfMonth, 1, 1)

	return (
		<div ref={ref} className="absolute z-50 block pt-2">
			<div className="inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700">
				<div className="">
					{title && <div className="px-2 py-3 font-semibold text-center bg-white dark:bg-gray-700 dark:text-white">{title}</div>}
					<div className="flex justify-between mb-2">
						<ButtonPrevMonth />
						<ButtonSelectMonth />
						<ButtonNextMonth />
					</div>
				</div>
				<div className="p-1">
					{view === "days" && <Days start={start} />}
					{view === "months" && <Months />}
					{view === "years" && <Years />}
					{view === "decades" && <Decades />}
				</div>
				{actionButtons && (
					<div className="">
						<div className="flex mt-2 space-x-2">
							<ButtonToday />
							<ButtonClear />
						</div>
					</div>
				)}
			</div>
		</div>
	)
})
DatePickerPopup.displayName = "DatePickerPopup"

export default DatePickerPopup
