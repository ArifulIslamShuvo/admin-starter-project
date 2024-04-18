import axios from 'axios';
import { useEffect, useState } from 'react'
import Image from '../Image/Image';
import { AMANAGE_APP_SETTING_API, APP_SETTINGS_API } from './../../../../Utilities/APIs/APIs';
import useAxiosInstance from '../../../../Utilities/Hooks/useAxiosInstance';

function Logo() {

    // const [logo,] = useState(null)
    const [logo, setLogo] = useState(null)
    
    const axiosInstance = useAxiosInstance()
    useEffect(() => {
        async function getAndSetLogo() {
            const {data} = await axiosInstance.get(AMANAGE_APP_SETTING_API)
            setLogo(data[0].image)
        }
        getAndSetLogo()
    }, [])

    return (
        logo &&
        <Image
            imgLink={logo}
            imgAlt='Logo'
        />
    )
}

export default Logo


