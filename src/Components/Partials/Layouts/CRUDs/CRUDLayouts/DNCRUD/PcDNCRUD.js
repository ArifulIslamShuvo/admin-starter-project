import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcDNCRUD({

    // parentChild props
    parentDBField,

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete

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
            hasName
            hasDescription

        />
    )
}

export default PcDNCRUD