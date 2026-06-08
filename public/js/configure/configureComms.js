/****************************************************************************
 * configureComms.js
 * April 2021
 *****************************************************************************/

/* global setTime, start */

/**
 * Erase snapshots on device, set time, configure and set device to begin recording
 * @param {int} snapshotInterval Seconds between snapshots
 * @param {object} startDt Datetime object for when the device should start collecting snapshots
 * @param {object} endDt Datetime object for when the device should stop collecting snapshots
 * @param {int} dailyActiveStart Seconds since midnight when daily recording should start
 * @param {int} dailyActiveEnd Seconds since midnight when daily recording should end
 * @param {int} dailyActiveUtcOffset Seconds east of UTC for the daily recording window
 * @param {function} callback Function called upon completion
 */
function configure(snapshotInterval, startDt, endDt, dailyActiveStart, dailyActiveEnd, dailyActiveUtcOffset, callback) {

    console.log('Setting time');

    setTime((timeErr) => {

        if (timeErr) {

            callback(timeErr);
            return;

        }

        console.log('Time set');

        console.log('Start logging');

        start(snapshotInterval, startDt, endDt, dailyActiveStart, dailyActiveEnd, dailyActiveUtcOffset, (startErr) => {

            if (startErr) {

                callback(startErr);
                return;

            }

            console.log('Successfully started device logging');

            callback();

        });

    });

}
