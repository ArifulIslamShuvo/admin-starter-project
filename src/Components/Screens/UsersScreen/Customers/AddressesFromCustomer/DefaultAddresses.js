import React from 'react'
import PcSSCRUD from '../../../../Partials/Layouts/CRUDs/CRUDLayouts/SSCRUD/PcSSCRUD'
import { DEFAULT_ADDRESSES_API } from '../../../../../Utilities/APIs/APIs'

function DefaultAddresses() {
  return (
    <PcSSCRUD

        // parentChild props
        parentDBField='subcategory'

        // common props
        api={DEFAULT_ADDRESSES_API}
        screenTopicSingular='Item Subcategory'
        screenTopicPlural='Item Subcategories'

        // crud header props
        showTotalInHeading

        // select props
        // selectApi={SUBCATEGORIES_API}
        selectType='parent-child'
        selectDBField='subcategory'
        selectName='Subcategory'

        // secondSelect props
        // secondSelectApi={ITEMS_API}
        secondSelectName='Item'
        secondSelectDBField='item'
    />
  )
}

export default DefaultAddresses