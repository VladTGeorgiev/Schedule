const hhmmToMins = (hhmm) => {
	console.log(hhmm)
	const [ hh, mm ] = hhmm.split(':');
	const mins = parseInt(hh) * 60 + parseInt(mm);

	return mins;
};

const minsToHhmm = (mins) => {
	let hh = parseInt(mins / 60);
	let mm = mins % 60;

	if (hh < 10) {
		hh = `0${hh}`;
	}

	if (mm < 10) {
		mm = `0${mm}`;
	}

	return `${hh}:${mm}`;
};

const minsToHhmmSlot = (slot) => {
	return {
		from: minsToHhmm(slot.from),
		to: minsToHhmm(slot.to)
	};
};

const hhmmToMinsSlot = (slot) => {
	return {
		from: hhmmToMins(slot.from),
		to: hhmmToMins(slot.to)
	};
};

module.exports = {
    hhmmToMins,
    hhmmToMinsSlot,
    minsToHhmm,
    minsToHhmmSlot
}