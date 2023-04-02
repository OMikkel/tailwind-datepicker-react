import { ReactElement } from "react"

interface ITheme {
	background: string
	todayBtn: string
	clearBtn: string
	icons: string
	text: string
	disabledText: string
	input: string
	inputIcon: string
	selected: string
}

interface IIcons {
	prev: () => ReactElement | JSX.Element
	next: () => ReactElement | JSX.Element
}

export interface IOptions {
	title?: string
	autoHide?: boolean
	todayBtn?: boolean
	todayBtnText?: string
	clearBtn?: boolean
	clearBtnText?: string
	maxDate?: Date
	minDate?: Date
	theme?: ITheme
	icons?: IIcons
	datepickerClassNames?: string
	defaultDate?: Date
	language?: string
	weekDays?: string[]
}

const options: IOptions = {
	autoHide: true,
	todayBtn: true,
	clearBtn: true,
	todayBtnText: "Today",
	clearBtnText: "Clear",
	theme: {
		background: "",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	datepickerClassNames: "",
	defaultDate: new Date(),
	language: "en",
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
}

export default options
