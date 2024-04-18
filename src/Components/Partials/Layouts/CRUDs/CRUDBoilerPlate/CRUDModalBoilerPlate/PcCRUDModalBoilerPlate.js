import Modal from "../../../../Elements/Modal/Modal"
import PcCRUDCreateBoilerPlate from "../CRUDCreateBoilerPlate/PcCRUDCreateBoilerPlate"
import CRUDDeleteBoilerPlate from "../CRUDDeleteBoilerPlate/CRUDDeleteBoilerPlate"
import PcCRUDUpdateBoilerPlate from "../CRUDUpdateBoilerPlate/PcCRUDUpdateBoilerPlate"
import CRUDViewBoilerPlate from "../CRUDViewBoilerPlate/CRUDViewBoilerPlate"

function PcCRUDModalBoilerPlate({

    //parent ID
    parentID,

    //common props
    api, triggerFetch, targetID, employee, screenTopicSingular, setShowModal,

    // modal header props
    handleClose,

    // CRUD props
    showViewSection,
    allowCreate, showCreateForm, setShowCreateForm, 
    allowUpdate, showUpdateForm, setShowUpdateForm, 
    allowDelete, showDeleteSection, setShowDeleteSection,

    // field props
    hasName, hasDescription, hasImage, hasLink, hasAmount, hasEmail,
    hasPrecedence, maxPrecedence,
    hasBoolean, booleanName, booleanDBField,
    hasText, textDBField, textName,
    hasLongText, longTextDBField, longTextName,

    // select props
    hasSelect, selectApi, selectType, selectDBField, selectName,

    // secondSelect props
    hasSecondSelect, secondSelectApi, secondSelectItems, secondSelectName, secondSelectDBField

}) {

    return (
        <Modal 
            handleClose={handleClose}
            modalHeading={
                (showViewSection && `View ${screenTopicSingular}`) || 
                (allowCreate && showCreateForm && `Create ${screenTopicSingular}`) || 
                (allowUpdate && showUpdateForm && `Update ${screenTopicSingular}`) || 
                (allowDelete && showDeleteSection && `Delete ${screenTopicSingular}`)
            }
        >
            

            {showViewSection && 
                <CRUDViewBoilerPlate 
                    // common props
                    api={api}
                    targetID={targetID}
                    employee={employee}
                    screenTopicSingular={screenTopicSingular}
                    // field props
                    hasName={hasName}
                    hasDescription={hasDescription}
                    hasImage={hasImage}
                    hasPrecedence={hasPrecedence}
                    hasLink={hasLink}
                    hasAmount={hasAmount}
                    hasEmail={hasEmail}

                    hasText={hasText}
                    textName={textName}
                    textDBField={textDBField}

                    hasLongText={hasLongText}
                    longTextDBField={longTextDBField}
                    longTextName={longTextName}

                    hasBoolean={hasBoolean}
                    booleanName={booleanName}
                    booleanDBField={booleanDBField}
                    
                    // select props
                    hasSelect={hasSelect}
                    selectApi={selectApi}
                    selectType={selectType}
                    selectName={selectName}
                    selectDBField={selectDBField}

                    // secondSelect props
                    hasSecondSelect={hasSecondSelect}
                    secondSelectApi={secondSelectApi}
                    secondSelectItems={secondSelectItems}
                    secondSelectName={secondSelectName}
                    secondSelectDBField={secondSelectDBField}
                />
            }

            {allowCreate && showCreateForm && 
                <PcCRUDCreateBoilerPlate 
                    // parent ID
                    parentID={parentID}
                    // common props
                    api={api}
                    triggerFetch={triggerFetch}
                    employee={employee}
                    screenTopicSingular={screenTopicSingular}
                    setShowModal={setShowModal}
                    // create props
                    setShowCreateForm={setShowCreateForm}
                    // field props
                    hasName={hasName}
                    hasDescription={hasDescription}
                    hasImage={hasImage}
                    hasLink={hasLink}
                    hasAmount={hasAmount}
                    hasEmail={hasEmail}

                    hasPrecedence={hasPrecedence}
                    maxPrecedence={maxPrecedence}

                    hasBoolean={hasBoolean}
                    booleanName={booleanName}
                    booleanDBField={booleanDBField}

                    hasText={hasText}
                    textName={textName}
                    textDBField={textDBField}

                    hasLongText={hasLongText}
                    longTextDBField={longTextDBField}
                    longTextName={longTextName}

                    // select props
                    selectApi={selectApi}
                    selectDBField={selectDBField}
                    selectName={selectName}

                    // secondSelect props
                    hasSecondSelect={hasSecondSelect}
                    secondSelectApi={secondSelectApi}
                    secondSelectName={secondSelectName}
                    secondSelectDBField={secondSelectDBField}
                />
            }

            {allowUpdate && showUpdateForm && 
                <PcCRUDUpdateBoilerPlate
                    // parent ID
                    parentID={parentID} 
                    // common props
                    api={api}
                    triggerFetch={triggerFetch}
                    targetID={targetID}
                    employee={employee}
                    screenTopicSingular={screenTopicSingular}
                    setShowModal={setShowModal}
                    // update props
                    setShowUpdateForm={setShowUpdateForm}
                    // field props
                    hasName={hasName}
                    hasDescription={hasDescription}
                    hasImage={hasImage}
                    hasLink={hasLink}
                    hasAmount={hasAmount}
                    hasEmail={hasEmail}
                    
                    hasPrecedence={hasPrecedence}
                    maxPrecedence={maxPrecedence}

                    hasBoolean={hasBoolean}
                    booleanName={booleanName}
                    booleanDBField={booleanDBField}

                    hasText={hasText}
                    textName={textName}
                    textDBField={textDBField}

                    hasLongText={hasLongText}
                    longTextDBField={longTextDBField}
                    longTextName={longTextName}
                    
                    // select props
                    selectApi={selectApi}
                    selectDBField={selectDBField}
                    selectName={selectName}

                    // secondSelect props
                    hasSecondSelect={hasSecondSelect}
                    secondSelectApi={secondSelectApi}
                    secondSelectItems={secondSelectItems}
                    secondSelectName={secondSelectName}
                    secondSelectDBField={secondSelectDBField}
                />
            }

            {allowDelete && showDeleteSection && 
                <CRUDDeleteBoilerPlate
                    // common props
                    api={api}
                    triggerFetch={triggerFetch}
                    targetID={targetID}
                    employee={employee}
                    setShowModal={setShowModal}
                    // delete props 
                    setShowDeleteSection={setShowDeleteSection}
                    //field props
                    hasName={hasName}
                    // select props
                    hasSelect={hasSelect}
                    selectApi={selectApi}
                    selectDBField={selectDBField}
                    // secondSelect props
                    hasSecondSelect={hasSecondSelect}
                    secondSelectApi={secondSelectApi}
                    secondSelectItems={secondSelectItems}
                    secondSelectName={secondSelectName}
                    secondSelectDBField={secondSelectDBField}
                />
            }

        </Modal>
    )
}

export default PcCRUDModalBoilerPlate