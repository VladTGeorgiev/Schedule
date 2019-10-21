const { timeToMins, timeToMinsSlot, timeToHoursSlot } = require('./timeDefinition.js');
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
		return timeToMins(freeSlot.to) - timeToMins(freeSlot.from) >= duration;
	});
};

const mergeSchedules = (schedules, duration) => {
	return schedules.reduce((finalSlots, slots, index) => {
		const nextSlots = schedules[index + 1];

		if (typeof nextSlots === 'undefined') {
			return finalSlots;
		}

		return mergeSlots(finalSlots, nextSlots, duration);
	}, schedules[0]);
};

const mergeSlots = (slotsA, slotsB, duration) => {
	const mergedSlots = [];

	for (let i = 0; i < slotsA.length; i += 1) {
		for (let j = 0; j < slotsB.length; j += 1) {
			const overlappingSlots = overlappingSlotsDuration(
				timeToMinsSlot(slotsA[i]),
				timeToMinsSlot(slotsB[j]),
				duration
			);

			if (overlappingSlots !== null) {
				mergedSlots.push(timeToHoursSlot(overlappingSlots));
			}
		}
	}

	return mergedSlots;
};

const overlappingSlotsDuration = (slotA, slotB, duration) => {
	const overlappingSlots = overlappingSlot(slotA, slotB);
	const validOverlappingSlots =
		overlappingSlots !== null && overlappingSlots.to - overlappingSlots.from >= duration;

	if (validOverlappingSlots) {
		return overlappingSlots;
	} else {
		return null;
	}
};

const overlappingSlot = (slotA, slotB) => {
	let maxFrom = Math.max(slotA.from, slotB.from);
	let minTo = Math.min(slotA.to, slotB.to);

	const isIntersect = minTo - maxFrom > 0;

	if (isIntersect) {
		return {
			from: maxFrom,
			to: minTo
		};
	} else {
		return null;
	}
};

availableSlots(schedules, 60); // [ { from: '12:15', to: '13:30' } ]
