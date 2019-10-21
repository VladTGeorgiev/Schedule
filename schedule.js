const { hhmmToMins } = require('./timeDefinition.js/index.js');
const { schedules, startOfTheDay, endOfTheDay } = require('./env.js');

const availableSlots = (schedules, duration) => {
	const schedulesWithFreeSlots = schedules
		.map((busySlots) => allocateFreeSlots(busySlots))
		.map((freeSlots) => filterByDuration(freeSlots, duration));

	const mergedfreeSlots = mergeSchedules(schedulesWithFreeSlots, duration);

	console.log(mergedfreeSlots);
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

const filterByDuration = (freeSlots, duration) => {
	return freeSlots.filter((freeSlot) => {
		return hhmmToMins(freeSlot.to) - hhmmToMins(freeSlot.from) >= duration;
	});
};

availableSlots(schedules, 60); // [ { from: '12:15', to: '13:30' } ]
