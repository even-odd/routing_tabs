import React, {useEffect, useState} from "react";

let date = new Date();
export default function Time () {
    const [ time, updateTime ] = useState(date);

    useEffect(() => {
        let timer = setTimeout(() => {
            updateTime(_countMinute)
        }, 1000 * 60);

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [time]);

    let hours = _prepareDateValue(time.getHours());
    let minutes = _prepareDateValue(time.getMinutes());
    return (
        <div className='current_time'>
            { hours }:{ minutes }
        </div>
    );
}

function _countMinute(prev) {
    let newDate = new Date(+prev);
    let prevMinutes = newDate.getMinutes();
    newDate.setMinutes(prevMinutes + 1);

    return newDate;
}

function _prepareDateValue(value) {
    return value < 10 ? '0' + value : value;
}
