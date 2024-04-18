import axios from 'axios'
import { useEffect, useState } from 'react'

import Form from '../../../Forms/Form'
import FormSubmitButton from '../../../Forms/FormSubmitButton/FormSubmitButton'

import ShortTextInput from '../../../Forms/FormInputs/ShortTextInput/ShortTextInput'
import LongTextInput from '../../../Forms/FormInputs/LongTextInput/LongTextInput'
import SelectInput from '../../../Forms/FormInputs/SelectInput/SelectInput'
import SelectOption from '../../../Forms/FormInputs/SelectInput/SelectOption/SelectOption'

import ImageInput from '../../../Forms/FormInputs/ImageInput/ImageInput'
import LinkInput from '../../../Forms/FormInputs/LinkInput/LinkInput'
import SwitchInput from '../../../Forms/FormInputs/SwitchInput/SwitchInput'

import NumberInput from '../../../Forms/FormInputs/NumberInput/NumberInput'
import EmailInput from '../../../Forms/FormInputs/EmailInput/EmailInput'

function PcCRUDCreateBoilerPlate({
    // parent ID
    parentID,

    // common props
    api, triggerFetch, employee, screenTopicSingular, setShowModal,

    // create props
    setShowCreateForm,

    // field props
    hasName, hasDescription, hasImage, hasLink, hasAmount, hasEmail,
    hasPrecedence, maxPrecedence,
    hasBoolean, booleanName, booleanDBField,
    hasText, textDBField, textName,
    hasLongText, longTextDBField, longTextName,

    // select props
    selectApi, selectDBField, selectName,

    // secondSelect props
    hasSecondSelect, secondSelectApi, secondSelectName, secondSelectDBField,

    // textSelectProps
    hasTextSelect, textSelectOptions, textSelectField, textSelectName

}) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [boolean, setBoolean] = useState(false)
    const [image, setImage] = useState(null)
    const [text, setText] = useState('')
    const [longText, setLongText] = useState('')
    const [precedence, setPrecedence] = useState(0)
    const [amount, setAmount] = useState(0)
    const [email, setEmail] = useState('')
    
    const [selectItem, setSelectItem] = useState(parentID)
    const [selectItems, setSelectItems] = useState(null)

    const [secondSelectItem, setSecondSelectItem] = useState(0)
    const [secondSelectItems, setSecondSelectItems] = useState(null)

    const [textSelectOption, setTextSelectOption] = useState('')


    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${employee.token}`
            }
        }

        async function fetchAndSetSelectItems() {
            const {data} = await axios.get(selectApi, config)
            setSelectItems(data)
        }

        fetchAndSetSelectItems()

        if (hasSecondSelect) {

          async function fetchAndSetSecondSelectItems() {
              const {data} = await axios.get(secondSelectApi, config)
              setSecondSelectItems(data)
          }

          fetchAndSetSecondSelectItems()
        }

    }, [selectApi, hasSecondSelect, secondSelectApi, employee.token])

    async function handleSubmit(e) {
    
        e.preventDefault();

        const config = {
          headers: {
              Authorization: `Bearer ${employee.token}`
          }
        }

        if (!hasImage) {

          const itemData = {}

          itemData[selectDBField] = selectItem
          if (hasName) {itemData.name = name}
          if (hasDescription) {itemData.description = description}
          if (hasPrecedence) {itemData.precedence = precedence}
          if (hasLink) {itemData.link = link}
          if (hasAmount) {itemData.amount = amount}
          if (hasEmail) {itemData.email = email}
          if (hasBoolean) {itemData[booleanDBField] = boolean}
          if (hasText) {itemData[textDBField] = text}
          if (hasLongText) {itemData[longTextDBField] = longText}
          if (hasSecondSelect) {itemData[secondSelectDBField] = secondSelectItem}
          if (hasTextSelect) {itemData[textSelectField] = textSelectOption}

          const response = await axios.post(api, itemData, config)

          if (response) {
            setName('')
            setDescription('')
            setLink('')
            setAmount(0)
            setEmail('')
            setText('')
            setLongText('')
            setPrecedence(0)
            setSelectItem(0)
            setSecondSelectItem(0)
            setImage(null)
            setBoolean(false)
      
            setShowCreateForm(false);
            setShowModal(false);

            triggerFetch()
          }

        }
        
        if (hasImage) {

          const itemData = new FormData()

          itemData.append(selectDBField, selectItem)
          itemData.append('image', image)
          if (hasName) {itemData.append('name', name)}
          if (hasDescription) {itemData.append('description', description)}
          if (hasLink) {itemData.append('link', link)}
          if (hasAmount) {itemData.append('amount', amount)}
          if (hasEmail) {itemData.append('email', email)}
          if (hasBoolean) {itemData.append(booleanDBField, boolean)}
          if (hasPrecedence) {itemData.append('precedence', precedence)}
          if (hasText) {itemData.append(textDBField, text)}
          if (hasLongText) {itemData.append(longTextDBField, longText)}
          if (hasSecondSelect) {itemData.append(secondSelectDBField, secondSelectItem)}

          console.log(itemData)

          const response = await axios.post(api, itemData, config)

          if (response) {
            setName('')
            setDescription('')
            setLink('')
            setAmount(0)
            setEmail('')
            setText('')
            setLongText('')
            setPrecedence(0)
            setSelectItem(0)
            setSecondSelectItem(0)
            setImage(null)
            setBoolean(false)
      
            setShowCreateForm(false)
            setShowModal(false)

            triggerFetch()

          }

        }

    }

    

    function precedenceSelectOptions() {
      const rows = []
      if (hasPrecedence && maxPrecedence) {
        for (let i = 1; i <= maxPrecedence; i++) {
          rows.push(<SelectOption key={i} optionText={i} optionValue={i} />)
        }
        return rows;
      }
    }

    return (
      <Form onSubmit={handleSubmit} hasImage={hasImage}>
            
        <SelectInput value={selectItem} setState={setSelectItem}>
            <SelectOption
                optionValue={parentID}
                optionText={selectItems?.find(s => s._id === parentID)?.name}
            />
        </SelectInput>

        {
          hasSecondSelect &&
            <SelectInput value={secondSelectItem} setState={setSecondSelectItem}>
                <SelectOption optionValue={0} optionText={`Select ${secondSelectName}`} />
                {secondSelectItems?.map(sItem => (
                    <SelectOption
                        key={sItem._id}
                        optionValue={sItem._id}
                        optionText={sItem.name}
                    />
                ))}
            </SelectInput>
        }
        {
          hasText &&
            <ShortTextInput
              label={textName}
              value={text}
              placeholder={`Enter ${textName}`}
              setState={setText}
            />
        }
        {
          hasLongText &&
          <LongTextInput 
              label={longTextName}
              value={longText}
              placeholder={`Enter ${longTextName}`}
              setState={setLongText}
          />
        }
        {
          hasName &&
            <ShortTextInput 
                label={`${screenTopicSingular} Name`}
                value={name}
                placeholder={`Enter ${screenTopicSingular} Name`}
                setState={setName}
            />
        }
        {
          hasDescription &&
            <LongTextInput 
                label={`${screenTopicSingular} Description`}
                value={description}
                placeholder={`Enter ${screenTopicSingular} Description`}
                setState={setDescription}
            />
        }
        {
          hasLink &&
            <LinkInput
                value={link}
                setState={setLink}
            />
        }
        {
          hasAmount &&
            <NumberInput
              label='Amount'
              placeholder='Enter Amount'
              value={amount}
              setState={setAmount}
            />
        }
        {
          hasEmail &&
            <EmailInput
              label='Email'
              placeholder='Enter Email'
              value={email}
              setState={setEmail}
            />
        }
        {
          hasBoolean &&
            <SwitchInput
              label={booleanName}
              toggleSwitch={() => setBoolean(prevState => !prevState)}
              checked={boolean}
            />
        }
        {
          hasImage &&
            <ImageInput setState={setImage} allowCreateImage>Upload Image</ImageInput>  
        }
        
        {
          hasPrecedence &&
            <SelectInput value={precedence} setState={setPrecedence}>
                <SelectOption optionValue={0} optionText='Select Precedence' />
                {precedenceSelectOptions()}
            </SelectInput>
        }
        <FormSubmitButton text={`Create New ${screenTopicSingular}`}/>
      </Form>
    )
} 

export default PcCRUDCreateBoilerPlate