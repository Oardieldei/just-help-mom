// номер месяца по порядку (без кавычек)
const chosenMonth = 3

// год (без кавычек)
const chosenYear = 2025



//--------------------------------------------------------------------------
// все, что ниже, тебе не нужно
const dataObjectToUse = {}

dataObjectToUse.month = chosenMonth - 1
dataObjectToUse.year = chosenYear

const createFileName = (cardNameRU) => {
	let correctFileName

	switch (cardNameRU) {
		case 'шут':
			correctFileName = '00-Shut'
			break;
		case 'маг':
			correctFileName = '01-Mag'
			break;
		case 'жрица':
			correctFileName = '02-Zhrica'
			break;
		case 'императрица':
			correctFileName = '03-Imperatrica'
			break;
		case 'император':
			correctFileName = '04-Imperator'
			break;
		case 'жрец':
			correctFileName = '05-Zhrec'
			break;
		case 'влюбленные':
			correctFileName = '06-Vljublennye'
			break;
		case 'колесница':
			correctFileName = '07-Kolesnica'
			break;
		case 'справедливость':
			correctFileName = '08-Spravedlivost'
			break;
		case 'отшельник':
			correctFileName = '09-Otshelnik'
			break;
		case 'колесо фортуны':
			correctFileName = '10-Koleso-Fortuny'
			break;
		case 'сила':
			correctFileName = '11-Sila'
			break;
		case 'повешенный':
			correctFileName = '12-Poveshennyj'
			break;
		case 'смерть':
			correctFileName = '13-Smert'
			break;
		case 'умеренность':
			correctFileName = '14-Umerennost'
			break;
		case 'дьявол':
			correctFileName = '15-Diavol'
			break;
		case 'башня':
			correctFileName = '16-Bashnja'
			break;
		case 'звезда':
			correctFileName = '17-Zvezda'
			break;
		case 'луна':
			correctFileName = '18-Luna'
			break;
		case 'солнце':
			correctFileName = '19-Solnce'
			break;
		case 'суд':
			correctFileName = '20-Sud'
			break;
		case 'мир':
			correctFileName = '21-Mir'
			break;
		case '1 кубков':
			correctFileName = 'kubkov-01'
			break;
		case '2 кубков':
			correctFileName = 'kubkov-02'
			break;
		case '3 кубков':
			correctFileName = 'kubkov-03'
			break;
		case '4 кубков':
			correctFileName = 'kubkov-04'
			break;
		case '5 кубков':
			correctFileName = 'kubkov-05'
			break;
		case '6 кубков':
			correctFileName = 'kubkov-06'
			break;
		case '7 кубков':
			correctFileName = 'kubkov-07'
			break;
		case '8 кубков':
			correctFileName = 'kubkov-08'
			break;
		case '9 кубков':
			correctFileName = 'kubkov-09'
			break;
		case '10 кубков':
			correctFileName = 'kubkov-10'
			break;
		case 'король кубков':
			correctFileName = 'kubkov-korol'
			break;
		case 'королева кубков':
			correctFileName = 'kubkov-koroleva'
			break;
		case 'паж кубков':
			correctFileName = 'kubkov-pazh'
			break;
		case 'рыцарь кубков':
			correctFileName = 'kubkov-rycar'
			break;
		case '1 мечей':
			correctFileName = 'mechei-01'
			break;
		case '2 мечей':
			correctFileName = 'mechei-02'
			break;
		case '3 мечей':
			correctFileName = 'mechei-03'
			break;
		case '4 мечей':
			correctFileName = 'mechei-04'
			break;
		case '5 мечей':
			correctFileName = 'mechei-05'
			break;
		case '6 мечей':
			correctFileName = 'mechei-06'
			break;
		case '7 мечей':
			correctFileName = 'mechei-07'
			break;
		case '8 мечей':
			correctFileName = 'mechei-08'
			break;
		case '9 мечей':
			correctFileName = 'mechei-09'
			break;
		case '10 мечей':
			correctFileName = 'mechei-10'
			break;
		case 'король мечей':
			correctFileName = 'mechei-korol'
			break;
		case 'королева мечей':
			correctFileName = 'mechei-koroleva'
			break;
		case 'паж мечей':
			correctFileName = 'mechei-pazh'
			break;
		case 'рыцарь мечей':
			correctFileName = 'mechei-rycar'
			break;
		case '1 пентаклей':
			correctFileName = 'pentaklei-01'
			break;
		case '2 пентаклей':
			correctFileName = 'pentaklei-02'
			break;
		case '3 пентаклей':
			correctFileName = 'pentaklei-03'
			break;
		case '4 пентаклей':
			correctFileName = 'pentaklei-04'
			break;
		case '5 пентаклей':
			correctFileName = 'pentaklei-05'
			break;
		case '6 пентаклей':
			correctFileName = 'pentaklei-06'
			break;
		case '7 пентаклей':
			correctFileName = 'pentaklei-07'
			break;
		case '8 пентаклей':
			correctFileName = 'pentaklei-08'
			break;
		case '9 пентаклей':
			correctFileName = 'pentaklei-09'
			break;
		case '10 пентаклей':
			correctFileName = 'pentaklei-10'
			break;
		case 'король пентаклей':
			correctFileName = 'pentaklei-korol'
			break;
		case 'королева пентаклей':
			correctFileName = 'pentaklei-koroleva'
			break;
		case 'паж пентаклей':
			correctFileName = 'pentaklei-pazh'
			break;
		case 'рыцарь пентаклей':
			correctFileName = 'pentaklei-rycar'
			break;
		case '1 жезлов':
			correctFileName = 'zhezlov-01'
			break;
		case '2 жезлов':
			correctFileName = 'zhezlov-02'
			break;
		case '3 жезлов':
			correctFileName = 'zhezlov-03'
			break;
		case '4 жезлов':
			correctFileName = 'zhezlov-04'
			break;
		case '5 жезлов':
			correctFileName = 'zhezlov-05'
			break;
		case '6 жезлов':
			correctFileName = 'zhezlov-06'
			break;
		case '7 жезлов':
			correctFileName = 'zhezlov-07'
			break;
		case '8 жезлов':
			correctFileName = 'zhezlov-08'
			break;
		case '9 жезлов':
			correctFileName = 'zhezlov-09'
			break;
		case '10 жезлов':
			correctFileName = 'zhezlov-10'
			break;
		case 'король жезлов':
			correctFileName = 'zhezlov-korol'
			break;
		case 'королева жезлов':
			correctFileName = 'zhezlov-koroleva'
			break;
		case 'паж жезлов':
			correctFileName = 'zhezlov-pazh'
			break;
		case 'рыцарь жезлов':
			correctFileName = 'zhezlov-rycar'
			break;
		default:
			alert('Неверное имя карты:', cardNameRU)
			break;
	}

	correctFileName += '.jpg'
	return correctFileName
}

const createReadableCardName = (cardNameRU) => {
	let cardNameSplit = cardNameRU.split('')
	let cardNameSplitChanging = cardNameSplit.map((item, index, array) => {		
		if (item === ' ') {
			array[index + 1] = array[index + 1].toUpperCase()
			return ' '
		}
		switch (item) {
			case '1':
				return 'Туз'
			case '2':
				return 'Двойка'
			case '3':
				return 'Тройка'
			case '4':
				return 'Четверка'
			case '5':
				return 'Пятерка'
			case '6':
				return 'Шестерка'
			case '7':
				return 'Семерка'
			case '8':
				return 'Восьмерка'
			case '9':
				return 'Девятка'
			case '10':
				return 'Десятка'
			default:
				break;
		}
		if (index === 0) return item.toUpperCase()
		return item
	})

	return cardNameSplitChanging.join('')
}

export { dataObjectToUse }