import Gantt from "frappe-gantt";
import { useEffect, useState } from "react";

export default function GanttView() {
    return (
        <GanttChart/>
    )
}

function GanttChart() {
    const [gantt, setGantt] = useState(null);

    const tasks = [
        {
            id: 'Mission-1',
            name: 'Mission 1',
            start: '2024-01-10',
            end: '2024-01-17',
            progress: 50,
            dependencies: '',
        },
        {
            id: 'Mission-2',
            name: 'Mission 2',
            start: '2024-01-15',
            end: '2024-01-19',
            progress: 20,
            dependencies: 'Mission-1',
        },
        {
            id: 'Mission-3',
            name: 'Mission 3',
            start: '2024-01-18',
            end: '2024-01-23',
            progress: 10,
            dependencies: 'Mission-2',
        }
    ];

    useEffect(() => {
        const ganttInstance = new Gantt('.gantt-container', tasks, {
            header_height: 50,
            column_width: 30,
            step: 24,
            // view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
            bar_height: 20,
            bar_corner_radius: 3,
            arrow_curve: 5,
            padding: 18,
            // view_mode: 'Day',
            date_format: 'YYYY-MM-DD',
            language: 'en',
            custom_popup_html: null
        });
        setGantt(ganttInstance);
    }, []);

    return <div className="gantt-container"></div>
}