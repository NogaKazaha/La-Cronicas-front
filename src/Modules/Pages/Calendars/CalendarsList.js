import style  from '../../../Styles/Calendars.module.scss'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
const CalendarList = ({ calendars }) => {
	return calendars.map((calendar) => {
    console.log(new Date(calendar.created_at))
		return (
      <div className={style.calendar}>
        <h1>{calendar.title}</h1>
        <div className={style.info}>
          <Moment fromNow>{calendar.created_at}</Moment>
        </div>
        <div>
          <Link to={`/calendars/${calendar.id}`}>
            Open calendar
          </Link>
          <Link to={`/calendars/edit/${calendar.id}`}>
            Edit
          </Link>
          {
            calendar.status == 'removable' && <div>
              <Link to={`/calendars/share/${calendar.id}`}>
                Share
              </Link>
            </div>
          }     
        </div>
      </div>   
		)
	})
}

export default CalendarList