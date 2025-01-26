[![NPM Version](https://img.shields.io/npm/v/tailwind-datepicker-react?color=green)](https://www.npmjs.com/package/tailwind-datepicker-react)
[![NPM Minified Size](https://img.shields.io/bundlephobia/min/tailwind-datepicker-react)](https://www.npmjs.com/package/tailwind-datepicker-react)
[![GitHub deployments](https://img.shields.io/github/deployments/OMikkel/tailwind-datepicker-react/github-pages?label=Demo%20Website%20Deployment)](https://omikkel.github.io/tailwind-datepicker-react/)

# Tailwind-datepicker-react

A Tailwindcss/Flowbite datepicker component built as a React component with types based on the [original datepicker from Flowbite](https://flowbite.com/docs/plugins/datepicker/). This component can also be used as a plugin using the [Flowbite React](https://github.com/themesberg/flowbite-react) library.

Date logic from [VanillaJS-datepicker](https://github.com/mymth/vanillajs-datepicker).

## [Demo](https://omikkel.github.io/tailwind-datepicker-react/)

![thumbnail](https://i.imgur.com/k6gVad8.png)

## Installation

1. Install the package

```bash
npm install tailwind-datepicker-react
```

```bash
yarn add tailwind-datepicker-react
```

2. Add the styles to your `tailwind.config.js` file

```js
module.exports = {
    ...
    content: [
        ...
        "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
    ],

};

```

3. Import the component and use it

```js
import Datepicker from "tailwind-datepicker-react"
```

## Usage

### Basic

```jsx
const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const DemoComponent = () => {
	const [show, setShow] = useState < boolean > false
	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

	return (
		<div>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}
```

### Advanced - Custom input field

```jsx
const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const DemoComponent = () => {
	const [show, setShow] = useState < boolean > false
	const [selectedDate, setSelectedDate] = (useState < Date) | (null > null)
	const handleChange = (selectedDate: Date) => {
		setSelectedDate(selectedDate)
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

	return (
		<div>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
				<div className="...">
					<div className="...">
						<CalendarIcon />
					</div>
					<input type="text" className="..." placeholder="Select Date" value={selectedDate} onFocus={() => setShow(true)} readOnly />
				</div>
			</Datepicker>
		</div>
	)
}
```

### DatePicker Props

- children?: ReactElement
- value?: Date
- options?: [IOptions](###IOptions)
- onChange?: (date: Date) => void
- show: boolean
- setShow: (show: boolean) => void
- classNames?: string

### IOptions

- anchor?: "auto"|"left"|"right" - Default: `auto`
- title?: string - Default: `disabled`
- autoHide?: boolean - Default: `true`
- todayBtn?: boolean - Default: `true`
- todayBtnText?: string - Default: `Today`
- clearBtn?: boolean - Default: `true`
- clearBtnText?: string - Default: `Clear`
- maxDate?: Date - Default: `disabled`
- minDate?: Date - Default: `disabled`
- theme?: [ITheme](###ITheme) - Default: `As seen on demo page`
- icons?: [IIcons](###IIcons) - Default: `As seen on demo page`
- datepickerClassNames?: string - Default: `""`
- defaultDate?: false|Date - Default: `new Date()`
- language?: string - Default: `en`
- disabledDates?: Date[] - Default: `[]`
- weekDays?: string[] - Default: `["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] - Start at Monday even with another language`
- inputNameProp?: string - Default: `date`
- inputIdProp?: string - Default: `Same as "inputNameProp"`
- inputPlaceholderProp?: string - Default: `Select Date`
- inputDateFormatProp?: [Intl.DateTimeFormatOptions](https://devhints.io/wip/intl-datetime) - Default: `{day: "numeric", month: "long", year: "numeric"}`

### ITheme

- background: string
- todayBtn: string
- clearBtn: string
- icons: string
- text: string
- disabledText: string
- input: string
- inputIcon: string
- selected: string

### IIcons

- prev: () => ReactNode | JSX.Element
- next: () => ReactNode | JSX.Element

### License

This project is open-source under the [MIT License](https://github.com/OMikkel/tailwind-datepicker-react/blob/master/LICENSE.md).

## Contributing

After clone, you can run (separated):

* `yarn run dev` to start building with [Nodemon](https://github.com/remy/nodemon).
* `cd demo-app/ && npm run dev` to start [Demo App](http://localhost:3000/).
