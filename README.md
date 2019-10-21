# Description

The businessmen among you will know that it's often not easy to find an appointment. In this task we wantto find such an appointment automatically. You will be given the calendars of our businessmen and a duration for the meeting. Your task is to find the earliest time, when every businessman is free for at leastthat duration.

# Requirements

All times in the calendars will be given in 24h format "hh:mm", the result must also be in that formatA meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takesplace from 09:00 - 11:00, the next possible start time would be 11:00The businessmen work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start andend within that rangeIf the meeting does not fit into the schedules, return nullThe duration of the meeting will be provided as an integer in minutes.

## Example Schedule

    A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
    B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
    C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00

Following these rules and looking at the example below the earliest time for a 60 minutes meeting would be 12:15.

## Data Format

The schedule will be provided as 3-dimensional array. The schedule above would be encoded this way:

    let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
    ];

# Technologies 

Node.js v10.16.0 [Node.js](https://nodejs.org/)]<br/>



# Installation

## Download and copy this repository by running the following command in your terminal.

    $ git clone git@github.com:VladTGeorgiev/Schedule.git

## Navigate to the project's folder.

    $ cd Schedule/

## Start the script by typing:

    $ node schedule.js



# env.js

You could provide different time schedules, as well as strting and finishing times for the working day.\



# License
    This is open source software licensed as MIT.