import React from "react";

const TimelineItem = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <li className="relative">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2  w-4 h-4 border-2 border-white  rounded-full"></div>
      <div className="ml-6 p-4 border-l border-gray-300 dark:border-gray-700">
        <time className="text-base font-normal leading-none text-white">
          {date}
        </time>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-lg font-normal text-white">{description}</p>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <div
      className="w-full py-16 text-white bg-gray-900 bg-blend-color-burn bg-[url('/assets/hexagon.png')] bg-cover bg-center"
      id="timeline"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full text-6xl text-center py-6 uppercase font-semibold text-[#ff4e00]">
          Timeline
        </div>

        <ol className="relative p-4 max-w-2xl">
          <TimelineItem
            date="17th January 2025"
            title="Registration Commences"
            description="Registration for the event commences"
          />
          <TimelineItem
            date="3 February 2025"
            title="Gameplay Weekend Starts"
            description="Gameplay weekend starts for the registered participants"
          />
          <TimelineItem
            date="7 February 2025"
            title="Final Day of Gameplay"
            description="Final day of gameplay for the registered participants"
          />
          <TimelineItem
            date="9 February 2025"
            title="Results Announcement"
            description="Results are announced for the registered participants"
          />
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
