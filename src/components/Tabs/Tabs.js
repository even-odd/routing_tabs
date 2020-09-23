import React, {useState} from "react";

const TABS_DATA = [
    {
        id: 0,
        title: 'someone title',
        content: 'lol kek cheburek '
    },
    {
        id: 1,
        title: 'run',
        content: 'run Forest, RUN! '
    },
    {
        id: 2,
        title: 'star',
        content: '42'
    },
];

export default function Tabs () {
    const [active, changeActive] = useState(-1);
    let content = active > -1 ? TABS_DATA[active].content : '';

    return (
        <div className='tabs'>
            { TABS_DATA.map((tab) =>
                <div className='tab'
                     key={ tab.id }
                     onClick={() => changeActive(tab.id)}
                > {tab.title} </div>
            )}

            <div className='tab_content'>
                { content }
            </div>
        </div>
    );
}
