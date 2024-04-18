import CRUDHeader from "./CRUDHeader/CRUDHeader"
import CRUDTableBoilerPlate from "../CRUDTableBoilerPlate/CRUDTableBoilerPlate"

function CRUDDashboardBoilerplate({

   // items prop
   items, 
   // common props
   screenTopicSingular, screenTopicPlural, setShowModal, 
   // props if we want to show total items in heading
   showTotalInHeading, totalItems,
   // action button props
   extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
   secondExtraActionButton, secondExtraActionButtonHandleClick, secondExtraActionButtonChildren,
   // props if create is allowed
   allowCreate, setShowCreateForm,
   // field props
   hasName, hasPrecedence, hasImage, hasLink, hasAmount, hasEmail,
   hasBoolean, booleanName, booleanDBField,
   hasText, textDBField, textName,
   //select props
   hasSelect, selectItems, selectType, selectName, selectDBField,
   // secondSelect props
   hasSecondSelect, secondSelectItems, secondSelectName, secondSelectDBField,
   // action button props
   setTargetID, setShowViewSection, 
   // props to allow update
   allowUpdate, setShowUpdateForm,
   // props to allow delete
   allowDelete, setShowDeleteSection

}) {

    return (

        <div>

            <CRUDHeader 
            
                // common props
                screenTopicPlural = {screenTopicPlural}

                // props if we want to show total items in heading
                showTotalInHeading = {showTotalInHeading}
                totalItems = {totalItems}
                
                // props if create is allowed
                allowCreate = {allowCreate}
                screenTopicSingular = {screenTopicSingular}
                setShowModal = {setShowModal}
                setShowCreateForm = {setShowCreateForm}

            />

            <CRUDTableBoilerPlate
                
               
                // item prop
                items={items}

                // common props
                screenTopicSingular={screenTopicSingular}

                // action button props
                extraActionButton={extraActionButton}
                extraActionButtonHandleClick={extraActionButtonHandleClick}
                extraActionButtonChildren={extraActionButtonChildren}
                secondExtraActionButton={secondExtraActionButton}
                secondExtraActionButtonHandleClick={secondExtraActionButtonHandleClick}
                secondExtraActionButtonChildren={secondExtraActionButtonChildren}

                // field props
                hasName={hasName}
                hasPrecedence={hasPrecedence}
                hasImage={hasImage}
                hasLink={hasLink}
                hasAmount={hasAmount}
                hasEmail={hasEmail}

                hasText={hasText}
                textDBField={textDBField}
                textName={textName}
                
                hasBoolean={hasBoolean}
                booleanName={booleanName}
                booleanDBField={booleanDBField}

                // field props
                hasSelect={hasSelect}
                selectItems={selectItems}
                selectType={selectType}
                selectName={selectName}
                selectDBField={selectDBField}

                // secondSelect props
                hasSecondSelect={hasSecondSelect}
                secondSelectItems={secondSelectItems}
                secondSelectName={secondSelectName}
                secondSelectDBField={secondSelectDBField}
                
                // action button props
                setShowModal={setShowModal}
                setTargetID={setTargetID}
                setShowViewSection={setShowViewSection}
                
                //props to allow update
                allowUpdate={allowUpdate}
                setShowUpdateForm={setShowUpdateForm}
                
                //props to allow delete
                allowDelete={allowDelete}
                setShowDeleteSection={setShowDeleteSection}
                
            />

        </div>
        
    )
}

export default CRUDDashboardBoilerplate