import { dataObjectToUse } from './vars.js'
const calendarDates = document.querySelector('.calendar__dates')

const getNumberOfFisrtDay = () => {
	const chosenDate = new Date(dataObjectToUse.year, dataObjectToUse.month)
	const firstDay = chosenDate.getDay()
	return firstDay
}

const getLastDay = () => {
	let lastDay = new Date(dataObjectToUse.year, dataObjectToUse.month + 1, 0)
	return lastDay.getDate()
}

const createEmptyCellForDay = () => {
	const newCell = document.createElement('div')
	newCell.classList.add('calendar__dates_cell')
	newCell.classList.add('calendar__dates_cell_empty')
	calendarDates.append(newCell)
}

const createCellForDay = () => {
	const newCell = document.createElement('div')
	newCell.classList.add('calendar__dates_cell')
	calendarDates.append(newCell)
}

const createEmptyCellsBefore = () => {
	for (let i = 0; i < getNumberOfFisrtDay() - 1; i++) {
		createEmptyCellForDay()
	}
}

const createCells = () => {
	for (let i = 0; i < getLastDay(); i++) {
		createCellForDay()
	}
}

const createCalendar = () => {
	createEmptyCellsBefore()
	createCells()
}

createCalendar()