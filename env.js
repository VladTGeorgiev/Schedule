const schedules = [
	[ [ '09:00', '11:30' ], [ '13:30', '16:00' ], [ '16:00', '17:30' ], [ '17:45', '19:00' ] ],
	[ [ '09:15', '12:00' ], [ '14:00', '16:30' ], [ '17:00', '17:30' ] ],
	[ [ '11:30', '12:15' ], [ '15:00', '16:30' ], [ '17:45', '19:00' ] ]
];

const startOfTheDay = [ [ '09:00', '09:00' ] ];

const endOfTheDay = [ [ '19:00', '19:00' ] ];

module.exports = {
	schedules,
	startOfTheDay,
	endOfTheDay
};