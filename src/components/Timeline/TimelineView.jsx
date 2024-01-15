import Timeline from "react-calendar-timeline";
import 'react-calendar-timeline/lib/Timeline.css';
import "./TimelineView.scss";

export default function TimelineView() {
    const groups = [{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }, { id: 3, title: 'Item 3' }];
    const items = [
        {
            id: 1,
            group: 1,
            title: 'Item 1',
            start_time: new Date(2024, 1, 10),
            end_time: new Date(2024, 1, 17),
            className: "timeline"
        },
        {
            id: 2,
            group: 2,
            title: 'Item 2',
            start_time: new Date(2024, 1, 15),
            end_time: new Date(2024, 1, 19),
            className: "timeline"
        },
        {
            id: 3,
            group: 3,
            title: 'Item 3',
            start_time: new Date(2024, 1, 17),
            end_time: new Date(2024, 1, 23),
            className: "timeline"
        },
    ];
    return (
        <Timeline
            groups={groups}
            items={items}
            defaultTimeStart={new Date(2024, 1, 10)}
            defaultTimeEnd={new Date(2024, 2, 1)}
        />
    )
}