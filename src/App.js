import React, {useState} from "react";
import SchedulerCalendar from "scheduler-calendar";

import "scheduler-calendar/dist/index.css";

export default function App() {
  const [temp, setTemp] = useState({});

  return (
    <div>
      <SchedulerCalendar
        availabilities={[
          {
            day: "mon",
            slots: [
              { from: "09:00", to: "10:30" },
              { from: "11:30", to: "13:00" },
              { from: "14:30", to: "17:00" },
            ],
          },
          {
            day: "2021-01-26",
            slots: [
              { from: "09:00", to: "10:30" },
              { from: "11:30", to: "19:00" },
            ],
          },
        ]}
        availabilityType={"infinity"}
        duration={10}
        onIntervalChange={() => {}}
      />
    </div>
  );
}
