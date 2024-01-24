import { useState } from "react";
import { Calendar } from "antd";


export default function CalendarView ({itemNames}) {
    const tasks = [
        {content: `${itemNames[0].name}`, style: 'bg-yellow-600', date: '2024-01-10'},
        {content: `${itemNames[1].name}`, style: 'bg-green-300', date: '2024-01-18'},
        {content: `${itemNames[2].name}`, style: 'bg-rose-600', date: '2024-01-20'}
    ]

    function getListData(value) {
        for (const item of tasks) {
            const date = new Date(item.date);
            if (value.$d.getDate() === date.getDate() && value.$d.getMonth() === date.getMonth() && value.$y === date.getFullYear()) {
                console.log(value.$d.getMonth(), value.$d.getDate(), value.$y);
                console.log(date.getMonth(), date.getDate(), date.getFullYear());
                console.log(item);
                return item;
            }
        }
    }

    function getMonthData (value)  {
        if (value.month() === 8) {
          return 1394;
        }
    };

    function monthCellRender (value) {
        const num = getMonthData(value);
        return num ? (
          <div>
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <div>
                {listData !== undefined && <p className={`text-white text-ellipsis w-32 ${listData?.style} px-2 py-1 w-full`}>{listData?.content}</p>}
            </div>
        );
      };

      function cellRender (current, info) {
        if (info.type === 'date') {
            return dateCellRender(current)
        };
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
      };
    return (
        <div>
            <Calendar cellRender={cellRender}/>
        </div>
    )
}