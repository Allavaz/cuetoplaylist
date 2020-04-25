const parser = require('cue-parser');

const cuesheet = parser.parse(process.argv[2]);

cuesheet.files[0].tracks.forEach((item) => {
    let hour;
    let minute;
    let second;
    if (item.indexes[0].time.min >= 60) {
        hour = Math.floor(item.indexes[0].time.min/60);
        minute = item.indexes[0].time.min - 60;
    } else {
        hour = 0;
        minute = item.indexes[0].time.min 
    }
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (item.indexes[0].time.sec < 10) {
        second = `0${item.indexes[0].time.sec}`;
    } else {
        second = item.indexes[0].time.sec;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    console.log(`${hour}:${minute}:${second} ${item.performer} - ${item.title}`);
});