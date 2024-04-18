import './CRUDHeading.css'

function CRUDHeading({screenTopicPlural, showTotalInHeading, totalItems}) {
  return (
    <h1 className="heading">
        {screenTopicPlural + 
        (showTotalInHeading && totalItems ? ` (${totalItems} in total)` : '')
        }
    </h1>
  )
}

export default CRUDHeading