import CRUDTable from './CRUDTable/CRUDTable'
import CRUDTableHeader from './CRUDTable/CRUDTableHeader/CRUDTableHeader'
import CRUDth from './CRUDTable/CRUDTableHeader/CRUDth/CRUDth'
import CRUDTableRow from './CRUDTable/CRUDTableRow/CRUDTableRow'
import ActionButtonsCell from './CRUDTable/CRUDTableCells/ActionButtonsCell/ActionButtonsCell'

import './CRUDTableBoilerPlate.css'
import ShortTextCell from './CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell'
import ImageCell from './CRUDTable/CRUDTableCells/ImageCell/ImageCell'

function CRUDTableBoilerPlate({
    // item prop
    items,
    // common props
    screenTopicSingular,
    // action button props
    extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
    secondExtraActionButton, secondExtraActionButtonHandleClick, secondExtraActionButtonChildren,
    // field props
    hasName, hasPrecedence, hasImage, hasLink, hasAmount, hasEmail,
    hasBoolean, booleanName, booleanDBField,
    hasText, textDBField, textName,
    // select props
    hasSelect, selectItems, selectType, selectName, selectDBField,
    // secondSelect props
    hasSecondSelect, secondSelectItems, secondSelectName, secondSelectDBField,
    // action button props
    setShowModal, setShowViewSection, setTargetID,
    //props to allow update
    allowUpdate, setShowUpdateForm,
    //props to allow delete
    allowDelete, setShowDeleteSection

    

}) {
    console.log(selectItems)

    return (
        <CRUDTable>
            <CRUDTableHeader>
                {/* {crudTableHeadings} */}
                {
                    hasSelect &&
                        (selectType === 'parent-child' 
                        ?
                        <CRUDth th={selectName} />
                        :
                        <CRUDth th={screenTopicSingular} />)

                }
                {
                    hasSecondSelect && <CRUDth th={secondSelectName} />
                }
                {
                    hasName && <CRUDth th={screenTopicSingular} />
                }
                {
                    hasAmount && <CRUDth th='Amount' />
                }
                {
                    hasEmail && <CRUDth th='Email' />
                }
                {
                    hasLink && <CRUDth th='Link' />
                }
                {
                    hasBoolean && <CRUDth th={booleanName} />
                }
                {
                    hasImage && <CRUDth th='Image' />
                }
                {
                    hasText && <CRUDth th={textName} />
                }
                {
                    hasPrecedence && <CRUDth th='Precedence' />
                }
                
                <CRUDth th={'Actions'} />
            </CRUDTableHeader>
            <tbody>
                {items && items.map(item => (
                    <CRUDTableRow key={item._id}>
                        {
                            hasSelect && selectItems &&
                                <ShortTextCell text={selectItems?.find(sItem => sItem._id === item[selectDBField])?.name} />
                                // <ShortTextCell text={item[selectDBField].name} />
                        }
                        {
                            hasSecondSelect &&
                                <ShortTextCell text={secondSelectItems?.find(sItem => sItem._id === item[secondSelectDBField])?.name} />
                        }
                        {
                            hasName && <ShortTextCell text={item?.name} />
                        }
                        {
                            hasAmount && <ShortTextCell text={item?.amount} />
                        }
                        {
                            hasEmail && <ShortTextCell text={item?.email} />
                        }
                        {
                            hasLink && <ShortTextCell text={item?.link} />
                        }
                        {
                            hasBoolean && <ShortTextCell 
                                            text=
                                            {
                                                item  
                                                ? 
                                                item[booleanDBField] === true
                                                    ?
                                                    'TRUE'
                                                    :
                                                    'FALSE'
                                                : 
                                                ''
                                            } 
                                        />
                        }
                        {
                            hasImage && <ImageCell 
                                            imgSrc={item.image} 
                                            imgAlt={item.name ? item.name : 'image'} 
                                        />
                        }
                        {
                            hasText && item && <ShortTextCell text={item[textDBField]} />
                        }
                        {
                            hasPrecedence && <ShortTextCell text={item?.precedence} />
                        }
                        <ActionButtonsCell
                            //common props
                            setShowModal={setShowModal}
                            setShowViewSection={setShowViewSection}
                            targetID={item._id}
                            setTargetID={setTargetID}
                            // action button props
                            extraActionButton={extraActionButton}
                            extraActionButtonHandleClick={extraActionButtonHandleClick}
                            extraActionButtonChildren={extraActionButtonChildren}
                            secondExtraActionButton={secondExtraActionButton}
                            secondExtraActionButtonHandleClick={secondExtraActionButtonHandleClick}
                            secondExtraActionButtonChildren={secondExtraActionButtonChildren}
                            // props to allow update
                            allowUpdate={allowUpdate}
                            setShowUpdateForm={setShowUpdateForm}
                            // props to allow delete
                            allowDelete={allowDelete}
                            setShowDeleteSection={setShowDeleteSection}
                        />
                    </CRUDTableRow>
                ))}
            </tbody>
        </CRUDTable>
    )
}

export default CRUDTableBoilerPlate