import './CRUDTable.css'

function CRUDTable({children}) {
  return (
    <div className="data_table_wrapper">
        <table 
            id="dashboardTable" 
            className="table dataTable table-borderless align-middle text-center dashboard_table"
        >
            {children}
        </table>
    </div>  )
}

export default CRUDTable