import type { NextPage } from "next"
import DatePicker from "tailwind-datepicker-react"
import ThemeSelector from "../components/ThemeSelector"
const Home: NextPage = () => {
	return (
		<div className="flex flex-col items-center w-full h-full gap-5 mt-20">
			<ThemeSelector />
			<h1 className="text-2xl font-bold">Date Picker Demo</h1>
			<div className="w-1/4">
				<label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					Date
				</label>
				<DatePicker title="Datepicker Custom Title" actionButtons={true} />
			</div>
		</div>
	)
}

export default Home
