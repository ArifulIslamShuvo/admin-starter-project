import './CRUDTableHeader.css'

function CRUDTableHeader({children}) {
  return (
    <thead>
        <tr>
            {children}
        </tr>
    </thead>
  )
}

export default CRUDTableHeader