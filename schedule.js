const { hhmmToMins, minsToHhmmInInterval, hhmmToMinsInInterval } = require('../../timeDefinition.js');
const { schedules, startOfTheDay, endOfTheDay } = require('./env.js');

const availableSlots = (schedules, duration) => {
	const schedulesWithFreeSlots = schedules
		.map((busySlots) => allocateFreeSlots(busySlots))

	console.log(schedulesWithFreeSlots);
};

const allocateFreeSlots = (busySlotsExcludingWorkingDayTimes) => {
	const busySlots = startOfTheDay.concat(busySlotsExcludingWorkingDayTimes).concat(endOfTheDay);

	const freeSlots = busySlots.reduce((freeSlots, thisbusySlot, index) => {
		const end = index === busySlots.length - 1;

		if (end) {
			return freeSlots;
		}

		const nextBusySlot = busySlots[index + 1];
		const nextBusySlotFrom = nextBusySlot[0];
		const thisbusySlotTo = thisbusySlot[1];

		freeSlots.push({
			from: thisbusySlotTo,
			to: nextBusySlotFrom
		});

		return freeSlots;
	}, []);

	return freeSlots;
};



availableSlots(schedules, 60); // [ { from: '12:15', to: '13:30' } ]
