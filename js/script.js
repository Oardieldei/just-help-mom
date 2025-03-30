import { dataObjectToUse } from './vars.js'
const calendarDates = document.querySelector('.calendar__dates')

const getNumberOfFisrtDay = () => {
	const chosenDate = new Date(dataObjectToUse.year, dataObjectToUse.month)
	const firstDay = chosenDate.getDay()
	return firstDay === 0 ? 7 : firstDay
}

const getLastDay = () => {
	let lastDay = new Date(dataObjectToUse.year, dataObjectToUse.month + 1, 0)
	return lastDay.getDate()
}

const getNumberOfLastDay = () => {
	const chosenDate = new Date(dataObjectToUse.year, dataObjectToUse.month + 1, 0)
	const lastDay = chosenDate.getDay()
	return lastDay === 0 ? 7 : lastDay
}

const createEmptyCellForDay = () => {
	const newCell = document.createElement('div')
	newCell.classList.add('calendar__dates_cell')
	newCell.classList.add('calendar__dates_cell_empty')
	calendarDates.append(newCell)
}

const createCellForDay = (dateNum) => {
	const newCell = document.createElement('div')
	newCell.classList.add('calendar__dates_cell')
	newCell.id = `day${dateNum}`
	calendarDates.append(newCell)

	const newCellInfo = document.createElement('div')
	newCellInfo.classList.add('calendar__dates_cell__info')
	newCell.append(newCellInfo)
	newCellInfo.innerText = dateNum

	const newCellCard = document.createElement('div')
	newCellCard.classList.add('calendar__dates_cell__card')
	newCell.append(newCellCard)

	const newCellCardImage = document.createElement('img')
	newCellCardImage.classList.add('calendar__dates_cell__card_image')
	newCellCardImage.src = '../img/cards/' + dataObjectToUse.cards[dateNum - 1].image
	newCell.append(newCellCardImage)
}

const createEmptyCellsBefore = () => {
	for (let i = 0; i < getNumberOfFisrtDay() - 1; i++) {
		createEmptyCellForDay()
	}
}

const createCells = () => {
	for (let i = 0; i < getLastDay(); i++) {
		createCellForDay(i + 1)
	}
}

const createEmptyCellsAfter = () => {
	for (let i = 0; i < 7 - getNumberOfLastDay(); i++) {
		createEmptyCellForDay()
	}
}

const createCalendar = () => {
	createEmptyCellsBefore()
	createCells()
	createEmptyCellsAfter()
}

createCalendar()