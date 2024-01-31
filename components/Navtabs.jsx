// components/NavTabs.js
import Link from 'next/link';

const NavTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.link}> <p
          className={`px-4 py-2 h-12 flex justify-center items-center ${activeTab === tab.id ? 'bg-primarycl text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-darkbg  dark:text-white border border-gray-300'
            }`}
          onClick={() => onTabChange(tab.id)}
        >

          <span className={`${activeTab === tab.id ? 'dark:text-black' : 'text-white'}text-2xl`}>{tab.tabicon}</span> {tab.label}
        </p>
        </Link>
      ))}
    </div>
  );
};

export default NavTabs;
