// components/TabContent.js
const TabContent = ({ activeTab, content }) => {
    const activeContent = content.find((c) => c.id === activeTab);
  
    return <div className="py-2 px-2">{activeContent ? activeContent.component : null}</div>;
  };
  
  export default TabContent;
  