import SmallSideBarItem from './SmallSideBarItem/SmallSideBarItem';

import { RiArchiveDrawerLine, RiBarChartLine, RiGroupLine, RiHome2Line, RiOrderPlayLine, RiRestaurantLine, RiSettings2Line, } from 'react-icons/ri';

import './SideBar.css';
import useLevels from '../../../../Utilities/Permissions/useLevels';
import OrderRequests from './OrderRequests/OrderRequests';

function SideBar() {
    const { superAdmin, owner, restaurantManager, employee } = useLevels()

    return (
        <>
            <section className="small_sidebar">
                <div className='container'>

                    {
                        (employee || restaurantManager) &&
                        <SmallSideBarItem
                            link='/dashboard'
                            dataTip='Dashboard'
                            dataFor='dashboard'
                        >
                            <RiHome2Line />
                        </SmallSideBarItem>
                    }


                    {(owner || superAdmin) &&
                        <>
                            <SmallSideBarItem
                                link='/'
                                dataTip='Dashboard'
                                dataFor='dashboard'
                            >
                                <RiHome2Line />
                            </SmallSideBarItem>
                            <SmallSideBarItem
                                link='/restaurants'
                                dataTip='Restaurants'
                                dataFor='Restaurants'
                            >
                                <RiRestaurantLine />
                            </SmallSideBarItem>
                            <SmallSideBarItem
                                link='/itemsScreen'
                                dataTip='Classification'
                                dataFor='Classification'
                            >
                                <RiArchiveDrawerLine />
                            </SmallSideBarItem>
                            <SmallSideBarItem
                                link='/fees'
                                dataTip='Fees'
                                dataFor='Fees'
                            >
                                <RiOrderPlayLine />

                            </SmallSideBarItem>
                          
                        </>
                    }
                    {
                        (owner || superAdmin || restaurantManager) &&

                        <OrderRequests
                            link='/orderScreens'
                            dataTip='Orders'
                            dataFor='Orders'
                        />
                    }

                    {(owner || superAdmin) &&
                        <>
                            <SmallSideBarItem
                                link='/reports'
                                dataTip='Reports'
                                dataFor='Reports'
                            >
                                <RiBarChartLine />
                            </SmallSideBarItem>

                            <SmallSideBarItem
                                link='/usersScreen'
                                dataTip='Users'
                                dataFor='Users'
                            >
                                <RiGroupLine />
                            </SmallSideBarItem>

                            <SmallSideBarItem
                                link='/settingsScreen'
                                dataTip='Settings'
                                dataFor='settings'
                            >
                                <RiSettings2Line />
                            </SmallSideBarItem>
                        </>
                    }

                </div>
            </section>
        </>
    )
}

export default SideBar
