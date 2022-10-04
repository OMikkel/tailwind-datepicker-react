import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSelector = () => {
	const [mounted, setMounted] = useState<boolean>(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])
	if (!mounted) return null
	return (
		<>
			{theme === "light" || theme === "system" || theme == undefined ? (
				<button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-1 focus:ring-blue-300" onClick={() => setTheme("dark")}>
					<MoonIcon className="w-6 h-6 text-yellow-500" />
				</button>
			) : (
				<button className="p-2 bg-gray-700 rounded-md hover:bg-gray-800 focus:ring-1 focus:ring-blue-300" onClick={() => setTheme("light")}>
					<SunIcon className="w-6 h-6 text-yellow-500" />
				</button>
			)}
		</>
	)
}
export default ThemeSelector
