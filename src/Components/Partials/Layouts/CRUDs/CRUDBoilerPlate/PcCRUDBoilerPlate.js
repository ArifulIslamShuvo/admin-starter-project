import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
// import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import CRUDDashboardBoilerplate from './CRUDDashboardBoilerplate/CRUDDashboardBoilerplate'
import PcCRUDModalBoilerPlate from './CRUDModalBoilerPlate/PcCRUDModalBoilerPlate'

import './CRUDBoilerPlate.css'
import AuthContext from '../../../../../Context/AuthContext'

function PcCRUDBoilerPlate({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // action button props
    extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
    secondExtraActionButton, secondExtraActionButtonHandleClick, secondExtraActionButtonChildren,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    hasName, hasDescription,
    hasImage, hasLink, hasAmount, hasEmail,
    hasBoolean, booleanName, booleanDBField,
    hasText, textDBField, textName,
    hasLongText, longTextDBField, longTextName,
    hasPrecedence, maxPrecedence,

    // select props
    hasSelect, selectApi, selectType, selectDBField, selectName,

    // secondSelect props
    hasSecondSelect, secondSelectApi, secondSelectName, secondSelectDBField

}) {

    // useStates for all cruds
    const [items, setItems] = useState(null)

    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)

    const [showViewSection, setShowViewSection] = useState(false)
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showDeleteSection, setShowDeleteSection] = useState(false)

    const [toggleFetch, setToggleFetch] = useState(false)

    // useStates for select cruds
    const [selectItems, setSelectItems] = useState(null)
    const [secondSelectItems, setSecondSelectItems] = useState(null)

    const {employee} = useContext(AuthContext)

    const {parentID} = useParams()
    

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${employee.token}`
            }
        }

        async function fetchAndSetItems() {
            const {data} = await axios.get(api, config)
            const childData = data.filter(d => d[selectDBField] === parentID)
            setItems(childData)
        }
        fetchAndSetItems()
        
        if (hasSelect) {
            async function fetchAndSetSelectItems() {
                const {data} = await axios.get(selectApi, config)
                setSelectItems(data)
            }
            fetchAndSetSelectItems()
        }

        if (hasSecondSelect) {
            async function fetchAndSetSecondSelectItems() {
                const {data} = await axios.get(secondSelectApi, config)
                setSecondSelectItems(data)
            }
            fetchAndSetSecondSelectItems()
        }

    }, [toggleFetch, api, hasSelect, selectApi, hasSecondSelect, secondSelectApi, employee.token, selectDBField, parentID])

    function handleClose() {
        setShowModal(false);
        setShowCreateForm(false);
        setShowViewSection(false);
        setShowUpdateForm(false);
        setShowDeleteSection(false);
    }

    function triggerFetch() {
        setToggleFetch(prevState => !prevState)
    }
    
    return (

        <div className='crud_holder'>
            <CRUDDashboardBoilerplate

                // items prop
                items={items}

                // common props
                screenTopicSingular = {screenTopicSingular}
                screenTopicPlural = {screenTopicPlural}
                setShowModal = {setShowModal}

                // props if we want to show total items in heading
                showTotalInHeading = {showTotalInHeading}
                totalItems = {items?.length}

                // action button props
                extraActionButton={extraActionButton}
                extraActionButtonHandleClick={extraActionButtonHandleClick}
                extraActionButtonChildren={extraActionButtonChildren}
                secondExtraActionButton={secondExtraActionButton}
                secondExtraActionButtonHandleClick={secondExtraActionButtonHandleClick}
                secondExtraActionButtonChildren={secondExtraActionButtonChildren}
                
                // props if create is allowed
                allowCreate = {allowCreate}
                setShowCreateForm = {setShowCreateForm}

                // field props
                hasName={hasName}
                hasImage={hasImage}
                hasLink={hasLink}
                hasAmount={hasAmount}
                hasEmail={hasEmail}
                hasPrecedence={hasPrecedence}

                hasText={hasText}
                textDBField={textDBField}
                textName={textName}

                hasBoolean={hasBoolean}
                booleanName={booleanName}
                booleanDBField={booleanDBField}

                // props to determine what fields are available in the crud
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
                setTargetID={setTargetID}
                setShowViewSection={setShowViewSection}

                //props to allow update
                allowUpdate={allowUpdate}
                setShowUpdateForm={setShowUpdateForm}
                
                //props to allow delete
                allowDelete={allowDelete}
                setShowDeleteSection={setShowDeleteSection}

            />

            {showModal &&
                <PcCRUDModalBoilerPlate

                    parentID={parentID}
                    //items prop
                    // items={items}

                    // common props
                    api={api}
                    triggerFetch={triggerFetch}
                    targetID={targetID}
                    employee={employee}
                    screenTopicSingular={screenTopicSingular}
                    setShowModal={setShowModal}

                    // modal header props
                    handleClose={handleClose}

                    // CRUD props
                    showViewSection={showViewSection}
                    allowCreate={allowCreate}
                    showCreateForm={showCreateForm}
                    setShowCreateForm={setShowCreateForm}
                    allowUpdate={allowUpdate}
                    showUpdateForm={showUpdateForm}
                    setShowUpdateForm={setShowUpdateForm}
                    allowDelete={allowDelete}
                    showDeleteSection={showDeleteSection}
                    setShowDeleteSection={setShowDeleteSection}

                    // field props
                    hasName={hasName}
                    hasDescription={hasDescription}
                    hasImage={hasImage}
                    hasPrecedence={hasPrecedence}
                    maxPrecedence={maxPrecedence}
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
                    hasSelect
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
        </div>

    )
}

export default PcCRUDBoilerPlate