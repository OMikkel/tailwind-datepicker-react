import React, { createContext, useState, useContext, forwardRef, useRef, useEffect } from 'react';

var firstDateOfMonth = function (selectedYear, selectedMonth, date) {
    var newDate = new Date(0);
    newDate.setFullYear(selectedYear, selectedMonth, date);
    return newDate.setHours(0, 0, 0, 0);
};
var addDays = function (date, amount) {
    var newDate = new Date(date);
    return newDate.setDate(newDate.getDate() + amount);
};
var dayDiff = function (day, from) {
    return (day - from + 7) % 7;
};
var dayOfTheWeekOf = function (baseDate, dayOfWeek, weekStart) {
    if (weekStart === void 0) { weekStart = 0; }
    var baseDay = new Date(baseDate).getDay();
    return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
};
var addMonths = function (date, amount) {
    var newDate = date;
    var monthsToSet = newDate.getMonth() + amount;
    var expectedMonth = monthsToSet % 12;
    if (expectedMonth < 0) {
        expectedMonth += 12;
    }
    var time = newDate.setMonth(monthsToSet);
    return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
};
var addYears = function (date, amount) {
    var newDate = date;
    var expectedMonth = newDate.getMonth();
    var time = newDate.setFullYear(newDate.getFullYear() + amount);
    return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
};
var getFormattedDate = function (date, options) {
    var defaultOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    if (options)
        defaultOptions = options;
    return new Intl.DateTimeFormat("en", defaultOptions).format(date);
};
var goToPrevNext = function (view, date, direction) {
    switch (view) {
        case "days":
            return addMonths(date, direction);
        case "months":
            return addYears(date, direction);
        case "years":
            return addYears(date, direction * 10);
        case "decades":
            return addYears(date, direction * 100);
        default:
            return addYears(date, direction * 10);
    }
};
var startOfYearPeriod = function (date, years) {
    var year = new Date(date).getFullYear();
    return Math.floor(year / years) * years;
};

var DatePickerContext = createContext({
    view: "days",
    setView: function () { },
    datePickerShow: false,
    setShowDatePicker: function () { },
    selectedDate: new Date(),
    setSelectedDate: function () { },
    showSelectedDate: true,
    setShowSelectedDate: function () { },
    selectedMonth: 0,
    selectedYear: 0,
});
var DatePickerProvider = function (_a) {
    var children = _a.children;
    var _b = useState("days"), view = _b[0], setView = _b[1];
    var _c = useState(false), datePickerShow = _c[0], setShowDatePicker = _c[1];
    var _d = useState(new Date()), selectedDate = _d[0], setSelectedDate = _d[1];
    var _e = useState(true), showSelectedDate = _e[0], setShowSelectedDate = _e[1];
    var selectedMonth = selectedDate.getMonth();
    var selectedYear = selectedDate.getFullYear();
    return (React.createElement(DatePickerContext.Provider, { value: { view: view, setView: setView, datePickerShow: datePickerShow, setShowDatePicker: setShowDatePicker, selectedDate: selectedDate, setSelectedDate: setSelectedDate, showSelectedDate: showSelectedDate, setShowSelectedDate: setShowSelectedDate, selectedMonth: selectedMonth, selectedYear: selectedYear } }, children));
};

var ButtonPrevMonth = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, setSelectedDate = _a.setSelectedDate, view = _a.view;
    return (React.createElement("button", { type: "button", className: "bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", onClick: function () { return setSelectedDate(new Date(goToPrevNext(view, selectedDate, -1))); } },
        React.createElement("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fillRule: "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" }))));
};
var ButtonSelectMonth = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, view = _a.view, setView = _a.setView;
    var calculateView = function () {
        if (view === "days")
            return "months";
        if (view === "months")
            return "years";
        if (view === "years")
            return "decades";
        return view;
    };
    return (React.createElement("button", { type: "button", className: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200", onClick: function () { return setView(calculateView()); } },
        view === "days" && getFormattedDate(selectedDate, { month: "long", year: "numeric" }),
        view === "months" && getFormattedDate(selectedDate, { year: "numeric" }),
        view === "years" && "".concat(startOfYearPeriod(selectedDate, 10), "-").concat(startOfYearPeriod(selectedDate, 10) + 9),
        view === "decades" && "".concat(startOfYearPeriod(selectedDate, 100), "-").concat(startOfYearPeriod(selectedDate, 100) + 90)));
};
var ButtonNextMonth = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, setSelectedDate = _a.setSelectedDate, view = _a.view;
    return (React.createElement("button", { type: "button", className: "bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", onClick: function () { return setSelectedDate(new Date(goToPrevNext(view, selectedDate, 1))); } },
        React.createElement("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fillRule: "evenodd", d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }))));
};
var ButtonToday = function () {
    var _a = useContext(DatePickerContext), setSelectedDate = _a.setSelectedDate, setShowSelectedDate = _a.setShowSelectedDate, setView = _a.setView;
    return (React.createElement("button", { type: "button", className: "w-1/2 px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300", onClick: function () {
            setSelectedDate(new Date());
            setShowSelectedDate(true);
            setView("days");
        } }, "Today"));
};
var ButtonClear = function () {
    var setShowSelectedDate = useContext(DatePickerContext).setShowSelectedDate;
    return (React.createElement("button", { type: "button", className: "w-1/2 px-5 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg dark:text-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300", onClick: function () { return setShowSelectedDate(false); } }, "Clear"));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var Days = function (_a) {
    var start = _a.start;
    var weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    var _b = useContext(DatePickerContext), selectedDate = _b.selectedDate, setSelectedDate = _b.setSelectedDate, showSelectedDate = _b.showSelectedDate, setShowSelectedDate = _b.setShowSelectedDate;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid grid-cols-7 mb-1" }, weekDays.map(function (day, index) { return (React.createElement("span", { key: index, className: "h-6 text-sm font-medium leading-6 text-center text-gray-500 dow dark:text-gray-400" }, day)); })),
        React.createElement("div", { className: "grid w-64 grid-cols-7" }, __spreadArray([], Array(42), true).map(function (_date, index) {
            var current = addDays(start, index);
            var day = getFormattedDate(current, { day: "numeric" });
            var month = getFormattedDate(current, { month: "long" });
            var year = getFormattedDate(current, { year: "numeric" });
            return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current) ? "bg-blue-700 text-white hover:bg-blue-600" : "", " ").concat(month == getFormattedDate(selectedDate, { month: "long" }) && year == getFormattedDate(selectedDate, { year: "numeric" }) ? "text-gray-900" : "text-gray-500"), onClick: function () {
                    setSelectedDate(new Date(current));
                    setShowSelectedDate(true);
                } }, day));
        }))));
};

var Decades = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, showSelectedDate = _a.showSelectedDate, setSelectedDate = _a.setSelectedDate, setView = _a.setView, setShowSelectedDate = _a.setShowSelectedDate;
    return (React.createElement("div", { className: "grid w-64 grid-cols-4" }, __spreadArray([], Array(12), true).map(function (_year, index) {
        var first = startOfYearPeriod(selectedDate, 100);
        var year = first - 10 + index * 10;
        return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year ? "bg-blue-700 text-white hover:bg-blue-600" : "", " ").concat(index == 0 || index == 11 ? "text-gray-500" : "text-gray-900"), onClick: function () {
                setSelectedDate(new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
                setView("years");
                setShowSelectedDate(true);
            } }, year));
    })));
};

var Months = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, showSelectedDate = _a.showSelectedDate, setSelectedDate = _a.setSelectedDate, setShowSelectedDate = _a.setShowSelectedDate, setView = _a.setView;
    return (React.createElement("div", { className: "grid w-64 grid-cols-4" }, __spreadArray([], Array(12), true).map(function (_month, index) {
        var month = getFormattedDate(new Date(selectedDate.getFullYear(), index), { month: "short" });
        return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm text-gray-900 ".concat(showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate, { month: "short" }) === month ? "bg-blue-700 text-white hover:bg-blue-600" : ""), onClick: function () {
                setSelectedDate(new Date(addMonths(selectedDate, index - selectedDate.getMonth())));
                setView("days");
                setShowSelectedDate(true);
            } }, month));
    })));
};

var Years = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, showSelectedDate = _a.showSelectedDate, setSelectedDate = _a.setSelectedDate, setView = _a.setView, setShowSelectedDate = _a.setShowSelectedDate;
    return (React.createElement("div", { className: "grid w-64 grid-cols-4" }, __spreadArray([], Array(12), true).map(function (_year, index) {
        var first = startOfYearPeriod(selectedDate, 10);
        var year = first - 1 + index * 1;
        return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year ? "bg-blue-700 text-white hover:bg-blue-600" : "", " ").concat(index == 0 || index == 11 ? "text-gray-500" : "text-gray-900"), onClick: function () {
                setSelectedDate(new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
                setView("months");
                setShowSelectedDate(true);
            } }, year));
    })));
};

var DatePickerPopup = forwardRef(function (_a, ref) {
    var title = _a.title, actionButtons = _a.actionButtons;
    var _b = useContext(DatePickerContext), selectedMonth = _b.selectedMonth, selectedYear = _b.selectedYear, view = _b.view;
    var firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1);
    var start = dayOfTheWeekOf(firstOfMonth, 1, 1);
    return (React.createElement("div", { ref: ref, className: "absolute z-50 block pt-2" },
        React.createElement("div", { className: "inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700" },
            React.createElement("div", null,
                title && React.createElement("div", { className: "px-2 py-3 font-semibold text-center bg-white dark:bg-gray-700 dark:text-white" }, title),
                React.createElement("div", { className: "flex justify-between mb-2" },
                    React.createElement(ButtonPrevMonth, null),
                    React.createElement(ButtonSelectMonth, null),
                    React.createElement(ButtonNextMonth, null))),
            React.createElement("div", { className: "p-1" },
                view === "days" && React.createElement(Days, { start: start }),
                view === "months" && React.createElement(Months, null),
                view === "years" && React.createElement(Years, null),
                view === "decades" && React.createElement(Decades, null)),
            actionButtons && (React.createElement("div", { className: "flex mt-2 space-x-2" },
                React.createElement(ButtonToday, null),
                React.createElement(ButtonClear, null))))));
});
DatePickerPopup.displayName = "DatePickerPopup";

var DatePicker = function (_a) {
    var title = _a.title, _b = _a.actionButtons, actionButtons = _b === void 0 ? true : _b;
    return (React.createElement(DatePickerProvider, null,
        React.createElement(DatePickerMain, { title: title, actionButtons: actionButtons })));
};
var DatePickerMain = function (_a) {
    var title = _a.title, actionButtons = _a.actionButtons;
    var setShowDatePicker = useContext(DatePickerContext).setShowDatePicker;
    var datePickerShow = useContext(DatePickerContext).datePickerShow;
    var InputRef = useRef(null);
    var DatePickerRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (!(InputRef.current && DatePickerRef.current))
                return;
            if (!InputRef.current.contains(event.target) && !DatePickerRef.current.contains(event.target)) {
                console.log(!InputRef.current.contains(event.target), !DatePickerRef.current.contains(event.target));
                setShowDatePicker(false);
            }
        };
        document.addEventListener("mousedown", function (event) { return handleClickOutside(event); });
        return function () {
            document.removeEventListener("mousedown", function (event) { return handleClickOutside(event); });
        };
    }, [DatePickerRef, InputRef, setShowDatePicker]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative" },
            React.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" },
                React.createElement(CalendarIcon, null)),
            React.createElement(Input, { ref: InputRef })),
        datePickerShow && React.createElement(DatePickerPopup, { ref: DatePickerRef, title: title, actionButtons: actionButtons })));
};
var Input = forwardRef(function (_props, ref) {
    var _a = useContext(DatePickerContext), setShowDatePicker = _a.setShowDatePicker, selectedDate = _a.selectedDate, showSelectedDate = _a.showSelectedDate;
    return (React.createElement("input", { ref: ref, type: "text", id: "date", className: "pl-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Select Date", value: selectedDate.getTime() > 0 && showSelectedDate ? getFormattedDate(selectedDate) : "", onFocus: function () { return setShowDatePicker(true); }, readOnly: true }));
});
Input.displayName = "Input";
var CalendarIcon = function () { return (React.createElement("svg", { "aria-hidden": "true", className: "w-5 h-5 text-gray-500 dark:text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }))); };

export { DatePicker };
//# sourceMappingURL=index.js.map
