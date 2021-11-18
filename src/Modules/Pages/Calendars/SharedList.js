import style  from '../../../Styles/Calendars.module.scss'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
const SharedList = ({ calendars }) => {
	return calendars.map((calendar) => {
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
          <Link to={`/calendars/edit/shared/${calendar.id}`}>
            Edit
          </Link>
        </div>
      </div>   
		)
	})
}

export default SharedList