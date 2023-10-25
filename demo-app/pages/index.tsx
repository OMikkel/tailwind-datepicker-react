import type { NextPage } from "next"
import { useState } from "react"
import DatePicker from "tailwind-datepicker-react"
// import DatePicker from "../../dist/Components/DatePicker"
import ThemeSelector from "../components/ThemeSelector"
import { IOptions } from "tailwind-datepicker-react/types/Options"

const Home: NextPage = () => {
	const [show, setShow] = useState<boolean>(false)
	const options: IOptions = {
		autoHide: true,
		todayBtn: true,
		clearBtn: true,
		inputDateFormatProp: {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		},
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
	}

	return (
		<div className="flex flex-col items-center w-full h-full gap-5 mt-20">
			<ThemeSelector />
			<h1 className="text-2xl font-bold">Date Picker Demo</h1>
			<div className="relative w-1/4">
				<label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					Date
				</label>
				<DatePicker show={show} setShow={(state) => setShow(state)} options={options} classNames="absolute" />
			</div>
		</div>
	)
}

export default Home
