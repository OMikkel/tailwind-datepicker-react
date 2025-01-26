import React, {ForwardedRef, forwardRef, useContext, useEffect, useState} from "react"
import { twMerge } from "tailwind-merge"
import { dayOfTheWeekOf, firstDateOfMonth } from "../Utils/date"
import { ButtonClear, ButtonNextMonth, ButtonPrevMonth, ButtonSelectMonth, ButtonToday } from "./Buttons"
import { DatePickerContext } from "./DatePickerProvider"
import Days from "./Views/Days"
import Decades from "./Views/Decades"
import Months from "./Views/Months"
import Years from "./Views/Years"

const DatePickerPopup = forwardRef<HTMLDivElement>((_props, ref: ForwardedRef<HTMLDivElement>) => {
	const { selectedMonth, selectedYear, view, options } = useContext(DatePickerContext)
	
	const language = options?.language ? options?.language : "en";
    // @ts-ignore
	const locale = new Intl.Locale(language);
	
	const weekStart = (locale?.weekInfo?.firstDay || 1);
	const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1)
	const start = dayOfTheWeekOf(firstOfMonth, weekStart, weekStart);


	const [leftAnchor,setLeftAnchor] = useState(options.anchor !== "right")

	useEffect(()  => {
		setLeftAnchor(options.anchor !== "right")
		if (options.anchor !== "auto"){
			return;
		}
		// @ts-ignore
		const  _ref: HTMLDivElement = ref.current;
		if (!_ref){
			return;
		}

		const resize = () => {
			const rect = _ref.getBoundingClientRect();
			const screenWidth = window.innerWidth;

			setLeftAnchor(rect.right <= screenWidth)
		}
		resize();
		window.addEventListener("resize",resize);
		return  () => {
			window.removeEventListener("resize",resize)
		}
	},[ref,options.anchor])
	
	return (
		<div ref={ref} className={twMerge("absolute z-50 block pt-2 top-10"+(leftAnchor ? "" : "  right-0"), options?.datepickerClassNames)}>
			<div className={twMerge("inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700", options?.theme?.background)}>
				<div>
					{options?.title && <div className={twMerge("px-2 py-3 font-semibold text-center text-gray-900 dark:text-white", options?.theme?.text)}>{options?.title}</div>}
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
				{(options?.todayBtn || options?.clearBtn) && (
					<div className="flex mt-2 space-x-2">
						{options?.todayBtn && <ButtonToday />}
						{options?.clearBtn && <ButtonClear />}
					</div>
				)}
			</div>
		</div>
	)
})
DatePickerPopup.displayName = "DatePickerPopup"

export default DatePickerPopup
