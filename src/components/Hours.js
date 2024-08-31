import React from "react";

    const Hours = () => {
        // add logic

        const shelterHours = [
            { day: "lunes", open: "10:00", close: "16:00" },
            { day: "martes", open: "10:00", close: "16:00" },
            { day: "miércoles", open: "10:00", close: "16:00" },
            { day: "jueves", open: "10:00", close: "16:00" },
            { day: "viernes", open: "10:00", close: "16:00" },
            { day: "sábado", open: "9:00", close: "20:00" },
            { day: "domingo", open: "9:00", close: "20:00" },
    
        ]

        // get the long day name and store it in a variable called today
        const today = new Date().toLocaleDateString('es-MX', { weekday: 'long' });
        console.log(today);

        // get today's hours
        const todayHours = shelterHours.find((day) => day.day === today);

        // display today and the hours in an div with an id of hours
        return (
            <div id="hours">
                <h2>Horario de atención</h2>
                <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
            </div>
        )
    }

export default Hours;