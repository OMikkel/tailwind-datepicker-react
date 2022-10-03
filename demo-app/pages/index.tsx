import type { NextPage } from "next"
import DatePicker from "../components/DatePicker"
const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex flex-col items-center mt-20">
			<h1 className="text-2xl font-bold">Date Picker Demo</h1>
			<div className="w-1/4">
				<label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					Date
				</label>
				<DatePicker title="Ansættelsesdato" actionButtons={true} />
			</div>
		</div>
	)
}

export default Home
