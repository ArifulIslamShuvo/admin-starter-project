import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate";

function SSCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // select props
    selectApi, selectType, selectDBField, selectName,

    // secondSelect props
    secondSelectApi, secondSelectName, secondSelectDBField

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
            
            // select props
            hasSelect
            selectApi={selectApi}
            selectType={selectType}
            selectDBField={selectDBField}
            selectName={selectName}

            // secondSelect props
            hasSecondSelect
            secondSelectApi={secondSelectApi}
            secondSelectName={secondSelectName}
            secondSelectDBField={secondSelectDBField}
        />
    )
}

export default SSCRUD