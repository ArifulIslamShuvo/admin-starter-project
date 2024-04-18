import { Link } from 'react-router-dom';
import './NavCard.css';
import NavCardBadge from './NavCardBadge';

function NavCard({ number, children, cardName, navCardLink, hasText, heading, showBadge }) {
  return (
    <div className='nav_card'>
      <Link to={navCardLink}>
        <div className='nav_card_container'>
          <div className="order_nav_card">
            {
              showBadge && (number > 0) &&
              <NavCardBadge number={number} />
            }
            {children}
          </div>
          {hasText && <h1>{heading}</h1>}
          <p className='nav_card_name'>{cardName}</p>
        </div>
      </Link>
    </div>
  )
}

export default NavCard