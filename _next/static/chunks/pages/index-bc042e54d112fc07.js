(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9559)}])},9559:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var a=r(5893),n=r(7294),l=function(e,t,r){var a=new Date(0);return a.setFullYear(e,t,r),a.setHours(0,0,0,0)},o=function(e,t){var r=new Date(e);return r.setDate(r.getDate()+t)},c=function(e,t){return(e-t+7)%7},s=function(e,t,r){void 0===r&&(r=0);var a=new Date(e).getDay();return o(e,c(t,r)-c(a,r))},u=function(e,t){var r=e.getMonth()+t,a=r%12;a<0&&(a+=12);var n=e.setMonth(r);return e.getMonth()!==a?e.setDate(0):n},i=function(e,t){var r=e.getMonth(),a=e.setFullYear(e.getFullYear()+t);return 1===r&&2===e.getMonth()?e.setDate(0):a},d=function(e,t){var r={day:"numeric",month:"long",year:"numeric"};return t&&(r=t),new Intl.DateTimeFormat("en",r).format(e)},g=function(e,t,r){switch(e){case"days":return u(t,r);case"months":return i(t,r);case"years":default:return i(t,10*r);case"decades":return i(t,100*r)}},m=function(e,t){return Math.floor(new Date(e).getFullYear()/t)*t},h=(0,n.createContext)({view:"days",setView:function(){},datePickerShow:!1,setShowDatePicker:function(){},selectedDate:new Date,setSelectedDate:function(){},showSelectedDate:!0,setShowSelectedDate:function(){},selectedMonth:0,selectedYear:0}),f=function(e){var t=e.children,r=(0,n.useState)("days"),a=r[0],l=r[1],o=(0,n.useState)(!1),c=o[0],s=o[1],u=(0,n.useState)(new Date),i=u[0],d=u[1],g=(0,n.useState)(!0),m=g[0],f=g[1],w=i.getMonth(),b=i.getFullYear();return n.createElement(h.Provider,{value:{view:a,setView:l,datePickerShow:c,setShowDatePicker:s,selectedDate:i,setSelectedDate:d,showSelectedDate:m,setShowSelectedDate:f,selectedMonth:w,selectedYear:b}},t)},w=function(){var e=(0,n.useContext)(h),t=e.selectedDate,r=e.setSelectedDate,a=e.view;return n.createElement("button",{type:"button",className:"bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200",onClick:function(){return r(new Date(g(a,t,-1)))}},n.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})))},b=function(){var e=(0,n.useContext)(h),t=e.selectedDate,r=e.view,a=e.setView;return n.createElement("button",{type:"button",className:"text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200",onClick:function(){return a("days"===r?"months":"months"===r?"years":"years"===r?"decades":r)}},"days"===r&&d(t,{month:"long",year:"numeric"}),"months"===r&&d(t,{year:"numeric"}),"years"===r&&"".concat(m(t,10),"-").concat(m(t,10)+9),"decades"===r&&"".concat(m(t,100),"-").concat(m(t,100)+90))},v=function(){var e=(0,n.useContext)(h),t=e.selectedDate,r=e.setSelectedDate,a=e.view;return n.createElement("button",{type:"button",className:"bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200",onClick:function(){return r(new Date(g(a,t,1)))}},n.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})))},y=function(){var e=(0,n.useContext)(h),t=e.setSelectedDate,r=e.setShowSelectedDate,a=e.setView;return n.createElement("button",{type:"button",className:"w-1/2 px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300",onClick:function(){t(new Date),r(!0),a("days")}},"Today")},x=function(){var e=(0,n.useContext)(h).setShowSelectedDate;return n.createElement("button",{type:"button",className:"w-1/2 px-5 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg dark:text-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300",onClick:function(){return e(!1)}},"Clear")};function k(e,t,r){if(r||2===arguments.length)for(var a,n=0,l=t.length;n<l;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var p=function(e){var t=e.start,r=(0,n.useContext)(h),a=r.selectedDate,l=r.setSelectedDate,c=r.showSelectedDate,s=r.setShowSelectedDate;return n.createElement(n.Fragment,null,n.createElement("div",{className:"grid grid-cols-7 mb-1"},["Mo","Tu","We","Th","Fr","Sa","Su"].map(function(e,t){return n.createElement("span",{key:t,className:"h-6 text-sm font-medium leading-6 text-center text-gray-500 dow dark:text-gray-400"},e)})),n.createElement("div",{className:"grid w-64 grid-cols-7"},k([],Array(42),!0).map(function(e,r){var u=o(t,r),i=d(u,{day:"numeric"}),g=d(u,{month:"long"}),m=d(u,{year:"numeric"});return n.createElement("span",{key:r,className:"hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(c&&a.getTime()>0&&d(a)===d(u)?"bg-blue-700 text-white hover:bg-blue-600":""," ").concat(g==d(a,{month:"long"})&&m==d(a,{year:"numeric"})?"text-gray-900":"text-gray-500"),onClick:function(){l(new Date(u)),s(!0)}},i)})))},D=function(){var e=(0,n.useContext)(h),t=e.selectedDate,r=e.showSelectedDate,a=e.setSelectedDate,l=e.setView,o=e.setShowSelectedDate;return n.createElement("div",{className:"grid w-64 grid-cols-4"},k([],Array(12),!0).map(function(e,c){var s=m(t,100)-10+10*c;return n.createElement("span",{key:c,className:"hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(r&&t.getTime()>0&&Number(d(t,{year:"numeric"}))===s?"bg-blue-700 text-white hover:bg-blue-600":""," ").concat(0==c||11==c?"text-gray-500":"text-gray-900"),onClick:function(){a(new Date(i(t,s-t.getFullYear()))),l("years"),o(!0)}},s)}))},E=function(){var e=(0,n.useContext)(h),t=e.selectedDate,r=e.showSelectedDate,a=e.setSelectedDate,l=e.setShowSelectedDate,o=e.setView;return n.createElement("div",{className:"grid w-64 grid-cols-4"},k([],Array(12),!0).map(function(e,c){var s=d(new Date(t.getFullYear(),c),{month:"short"});return n.createElement("span",{key:c,className:"hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm text-gray-900 ".concat(r&&t.getTime()>0&&d(t,{month:"short"})===s?"bg-blue-700 text-white hover:bg-blue-600":""),onClick:function(){a(new Date(u(t,c-t.getMonth()))),o("days"),l(!0)}},s)}))},S=function(){var e=(0,n.useContext)(h),t=e.selectedDate,r=e.showSelectedDate,a=e.setSelectedDate,l=e.setView,o=e.setShowSelectedDate;return n.createElement("div",{className:"grid w-64 grid-cols-4"},k([],Array(12),!0).map(function(e,c){var s=m(t,10)-1+1*c;return n.createElement("span",{key:c,className:"hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(r&&t.getTime()>0&&Number(d(t,{year:"numeric"}))===s?"bg-blue-700 text-white hover:bg-blue-600":""," ").concat(0==c||11==c?"text-gray-500":"text-gray-900"),onClick:function(){a(new Date(i(t,s-t.getFullYear()))),l("months"),o(!0)}},s)}))},N=(0,n.forwardRef)(function(e,t){var r=e.title,a=e.actionButtons,o=(0,n.useContext)(h),c=o.selectedMonth,u=o.selectedYear,i=o.view,d=l(u,c,1),g=s(d,1,1);return n.createElement("div",{ref:t,className:"absolute z-50 block pt-2"},n.createElement("div",{className:"inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700"},n.createElement("div",null,r&&n.createElement("div",{className:"px-2 py-3 font-semibold text-center bg-white dark:bg-gray-700 dark:text-white"},r),n.createElement("div",{className:"flex justify-between mb-2"},n.createElement(w,null),n.createElement(b,null),n.createElement(v,null))),n.createElement("div",{className:"p-1"},"days"===i&&n.createElement(p,{start:g}),"months"===i&&n.createElement(E,null),"years"===i&&n.createElement(S,null),"decades"===i&&n.createElement(D,null)),a&&n.createElement("div",{className:"flex mt-2 space-x-2"},n.createElement(y,null),n.createElement(x,null))))});N.displayName="DatePickerPopup";var C=function(e){var t=e.title,r=e.actionButtons;return n.createElement(f,null,n.createElement(M,{title:t,actionButtons:void 0===r||r}))},M=function(e){var t=e.title,r=e.actionButtons,a=(0,n.useContext)(h).setShowDatePicker,l=(0,n.useContext)(h).datePickerShow,o=(0,n.useRef)(null),c=(0,n.useRef)(null);return(0,n.useEffect)(function(){var e=function(e){o.current&&c.current&&!o.current.contains(e.target)&&!c.current.contains(e.target)&&(console.log(!o.current.contains(e.target),!c.current.contains(e.target)),a(!1))};return document.addEventListener("mousedown",function(t){return e(t)}),function(){document.removeEventListener("mousedown",function(t){return e(t)})}},[c,o,a]),n.createElement(n.Fragment,null,n.createElement("div",{className:"relative"},n.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},n.createElement(z,null)),n.createElement(F,{ref:o})),l&&n.createElement(N,{ref:c,title:t,actionButtons:r}))},F=(0,n.forwardRef)(function(e,t){var r=(0,n.useContext)(h),a=r.setShowDatePicker,l=r.selectedDate,o=r.showSelectedDate;return n.createElement("input",{ref:t,type:"text",id:"date",className:"pl-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Select Date",value:l.getTime()>0&&o?d(l):"",onFocus:function(){return a(!0)},readOnly:!0})});F.displayName="Input";var z=function(){return n.createElement("svg",{"aria-hidden":"true",className:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}))};let j=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",clipRule:"evenodd"}))}),R=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}))});var P=r(2010),T=function(){var e=(0,P.F)(),t=e.theme,r=e.setTheme;return(0,a.jsx)(a.Fragment,{children:"light"!=t&&t?(0,a.jsx)("button",{className:"p-2 bg-gray-700 rounded-md hover:bg-gray-800 focus:ring-1 focus:ring-blue-300",onClick:function(){return r("light")},children:(0,a.jsx)(R,{className:"w-6 text-yellow-500"})}):(0,a.jsx)("button",{className:"p-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-1 focus:ring-blue-300",onClick:function(){return r("dark")},children:(0,a.jsx)(j,{className:"w-6 text-yellow-500"})})})},V=function(){return(0,a.jsxs)("div",{className:"flex flex-col items-center w-full h-full gap-5 mt-20",children:[(0,a.jsx)(T,{}),(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Date Picker Demo"}),(0,a.jsxs)("div",{className:"w-1/4",children:[(0,a.jsx)("label",{htmlFor:"date",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Date"}),(0,a.jsx)(C,{title:"Ans\xe6ttelsesdato",actionButtons:!0})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);