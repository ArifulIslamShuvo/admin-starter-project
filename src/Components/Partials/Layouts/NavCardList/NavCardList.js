import './NavCardList.css';

function NavCardList({children, numOfCards}) {
  return (
    <div className={`nav_card_list ${numOfCards}_nav_cards_list`}>
        {children}
    </div>
  )
}

export default NavCardList