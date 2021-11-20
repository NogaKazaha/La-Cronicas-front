import style  from '../../../Styles/Calendar.module.scss'
import { Link } from 'react-router-dom'
const EventsList = ({ events }) => {
	return events.map((event) => {
		return (
      <div className={style.eventsList}>
        <div className={style.event}>
          <div className={style.info}>
            <span>{event.title}</span>
            <span>{event.category}</span>
            <span>{event.date}</span>
            <Link to={`/events/edit/${event.id}`}>
              Edit
            </Link>
          </div>
        </div>
      </div>  
		)
	})
}

export default EventsList