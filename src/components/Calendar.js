import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class DemoApp extends React.Component {
 
  
  render() {
    return (
      <FullCalendar
        
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
        eventContent={renderEventContent}
        events={[
    { title: `}`, date: '2022-01-21' },
    { title: 'event 2', date: '2022-01-22' }
  ]}
      />
    )
  }

  handleDateClick = (arg) => { 
    alert(arg.dateStr)
  }

}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}