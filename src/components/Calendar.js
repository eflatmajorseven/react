import React, {useState} from 'react'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import Popup from './Popup'
import Slot from './Slot'

const CALENDAR_STYLES = {
  position: 'relative',
  zIndex:1
}
 export default function Calendar () {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState("");

  const handleDateClick = (arg) => { 
    setIsOpen(true);
    setDate(arg.dateStr);
    //alert(arg.dateStr);
  }
    return (
    <div>
      <div className='calendar' style={CALENDAR_STYLES}>
      <FullCalendar
        
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={[
    { title: `Jonas A. 18h`, date: '2022-01-21' },
    {title: `Jonas A. 18h`, date: '2022-01-21' },
    { title: 'Petras B. 16h', date: '2022-01-22' }
  ]}
      />
      </div>
      <Slot open={isOpen} onClose={()=> setIsOpen(false)}
      date={date}>         
      </Slot>

      </div>
    )
}



function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
