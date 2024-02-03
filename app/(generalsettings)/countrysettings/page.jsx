'use client'
import React, { useState } from 'react'
import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
import { countrysettings } from '@/app/utils/data';
import NavTabs from '@/components/Navtabs';
import TabContent from '@/components/TabContent';
import CountriesTab from './countries/CountriesTab';
import StatesTab from './states/StatesTab';
import NeighbourhoodsTab from './neigbourhoods/NeigbourhoodsTab';
import CitiesTab from './cities/CitiesTab';
import { Group, Home, Language, LocationCity } from '@mui/icons-material';
const tabs = [
  { id: 1, label: 'Countries', tabicon: <Language />, link: <CountriesTab /> },
  { id: 2, label: 'States', tabicon: <Home />, link: <StatesTab /> },
  { id: 3, label: 'Cities', tabicon: <LocationCity />, link: <CitiesTab /> },
  { id: 4, label: 'Neighbourhoods', tabicon: <Group />, link: <NeighbourhoodsTab /> },
  // Add more tabs as needed
];

const content = [
  { id: 1, component: <CountriesTab /> },
  { id: 2, component: <StatesTab /> },
  { id: 3, component: <CitiesTab /> },
  { id: 4, component: <NeighbourhoodsTab /> },
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
              <h3 className="text-base font-semibold">Total {item.title}</h3>
              <span>
                <PictureInPictureIcon className='text-2xl' />
              </span>
            </div>

            <div className="flex justify-between items-center w-full">
              <h2 className='text-xl font-bold text-primarycl'>Active</h2>
              <h3 className="text-base font-medium">{item.numberdata}</h3>
            </div>          </div>
        ))}

      </section>

      <section className='py-4 px-2 flex flex-col md:flex-row'>
        <div className='w-full md:w-3/4'><NavTabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
          <TabContent activeTab={activeTab} content={content} /></div>
          <div className='w-full md:w-1/2'></div>
      </section>
      <section className='py-4 px-2'>

      </section>
    </div>
  )
}

export default CountrySettings