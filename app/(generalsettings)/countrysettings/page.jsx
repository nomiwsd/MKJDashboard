'use client'
import React, { useState } from 'react'
import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
import { countrysettings } from '@/app/utils/data';
import NavTabs from '@/components/Navtabs';
import TabContent from '@/components/TabContent';
import LanguageIcon from '@material-ui/icons/Language';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupIcon from '@material-ui/icons/Group';
import CountriesTab from './countries/CountriesTab';
import StatesTab from './states/StatesTab';
import NeighbourhoodsTab from './neigbourhoods/NeigbourhoodsTab';
import CitiesTab from './cities/CitiesTab';
const tabs = [
  { id: 1, label: 'Countries', tabicon: <LanguageIcon />, link: <CountriesTab/> },
  { id: 2, label: 'States', tabicon: <HomeIcon />, link: <StatesTab/> },
  { id: 3, label: 'Cities', tabicon: <LocationCityIcon />, link: <CitiesTab/> },
  { id: 4, label: 'Neighbourhoods', tabicon: <GroupIcon />, link: <NeighbourhoodsTab/> },
  // Add more tabs as needed
];

const content = [
  { id: 1, component: <CountriesTab/> },
  { id: 2, component: <StatesTab/> },
  { id: 3, component: <CitiesTab/> },
  { id: 4, component: <NeighbourhoodsTab/> },
  // Add more content components as needed
];
const CountrySettings = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {countrysettings && countrysettings.map((item) => (
          <div className="bg-white dark:bg-primarycl dark:text-white rounded-md text-black border-2 border-primarycl px-2 py-2 flex flex-col gap-1" key={item.id}>
            <div className="flex justify-between items-start">
              <h3 className="text-base font-medium">Total Active</h3>
              <span>
                <PictureInPictureIcon className='text-2xl' />
              </span>
            </div>

            <div className="flex justify-between items-center w-full">
              <h2 className='text-base font-medium'>{item.title}</h2>
              <h3 className="text-base font-medium">{item.numberdata}</h3>
            </div>

            <div
              className="flex gap-2 items-center"
            >
              <span className="bg-primarycl px-2 text-sm py-1 rounded text-white">
                +11%
              </span>
              <span className="text-sm font-normal">From previous period</span>
            </div>
          </div>
        ))}

      </section>

      <section className='py-4 px-2'>
        <NavTabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
        <TabContent activeTab={activeTab} content={content} />
      </section>
      <section className='py-4 px-2'>

      </section>
    </div>
  )
}

export default CountrySettings