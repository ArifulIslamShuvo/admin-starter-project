import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function ECRUD({
    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,


    // crud props
    allowCreate, allowUpdate, allowDelete,

   

}) {
  return (
    <CRUDBoilerPlate
            // common props
            api={api}
            screenTopicSingular={screenTopicSingular}
            screenTopicPlural={screenTopicPlural}

            // crud header props
            showTotalInHeading={showTotalInHeading}

            // crud props
            allowCreate={allowCreate}
            allowUpdate={allowUpdate}
            allowDelete={allowDelete}

            // field props
            hasEmail

         

        />
  )
}

export default ECRUD