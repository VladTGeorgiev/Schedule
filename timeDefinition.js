const timeToMins = (time) => {
	const [ hour, min ] = time.split(':');
	const mins = parseInt (hour) * 60 + parseInt(min);

	return mins;
};

const timeToHours = (mins) => {
	let hour = parseInt(mins / 60);
	let min = mins % 60;

	if (hour < 10) {
		hour = `0${hour}`;
	}

	if (min < 10) {
		min = `0${min}`;
	}

	return `${hour}:${min}`;
};

const timeToHoursSlot = (slot) => {
	return {
		from: timeToHours(slot.from),
		to: timeToHours(slot.to)
	};
};

const timeToMinsSlot = (slot) => {
	return {
		from: timeToMins(slot.from),
		to: timeToMins(slot.to)
	};
};

module.exports = {
    timeToMins,
    timeToMinsSlot,
    timeToHours,
    timeToHoursSlot
}