import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate"

function PcBSSCRUD({

    // parentChild props
    parentDBField,

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    booleanDBField, booleanName,

    // select props
    selectApi, selectType, selectDBField, selectName,

    // secondSelect props
    secondSelectApi, secondSelectName, secondSelectDBField

}) {


    return (

        <PcCRUDBoilerPlate

            // parentChild props
            parentDBField={parentDBField}

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
            hasBoolean
            booleanDBField={booleanDBField}
            booleanName={booleanName}

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

export default PcBSSCRUD