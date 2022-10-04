import { NextPage } from "next"
import { forwardRef, useContext, useEffect, useRef } from "react"
import { getFormattedDate } from "../utils/date"
import DatePickerPopup from "./DatePickerPopup"
import DatePickerProvider, { DatePickerContext } from "./DatePickerProvider"

export interface IDatePickerProps {
	title?: string
	actionButtons?: boolean
	autoHide?: boolean
}

const DatePicker: NextPage<IDatePickerProps> = ({ title, actionButtons = true }) => (
	<DatePickerProvider>
		<DatePickerMain title={title} actionButtons={actionButtons} />
	</DatePickerProvider>
)

const DatePickerMain: NextPage<IDatePickerProps> = ({ title, actionButtons }) => {
	const { setShowDatePicker } = useContext(DatePickerContext)
	const { datePickerShow } = useContext(DatePickerContext)
	const InputRef = useRef<HTMLInputElement>(null)
	const DatePickerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!(InputRef.current && DatePickerRef.current)) return
			if (!InputRef.current.contains(event.target as Node) && !DatePickerRef.current.contains(event.target as Node)) {
				console.log(!InputRef.current.contains(event.target as Node), !DatePickerRef.current.contains(event.target as Node))
				setShowDatePicker(false)
			}
		}

		document.addEventListener("mousedown", (event) => handleClickOutside(event))

		return () => {
			document.removeEventListener("mousedown", (event) => handleClickOutside(event))
		}
	}, [DatePickerRef, InputRef, setShowDatePicker])

	return (
		<>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<CalendarIcon />
				</div>
				<Input ref={InputRef} />
			</div>
			{datePickerShow && <DatePickerPopup ref={DatePickerRef} title={title} actionButtons={actionButtons} />}
		</>
	)
}

const Input = forwardRef<HTMLInputElement>((_props, ref) => {
	const { setShowDatePicker, selectedDate, showSelectedDate } = useContext(DatePickerContext)
	return (
		<input
			ref={ref}
			type="text"
			id="date"
			className="pl-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Select Date"
			value={selectedDate.getTime() > 0 && showSelectedDate ? getFormattedDate(selectedDate) : ""}
			onFocus={() => setShowDatePicker(true)}
			readOnly
		/>
	)
})
Input.displayName = "Input"

const CalendarIcon = () => (
	<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
			clip-rule="evenodd"
		></path>
	</svg>
)

export default DatePicker
