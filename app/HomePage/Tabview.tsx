'use client'
import { useState } from 'react';

interface Tab {
    title: string;
    content: React.ReactNode;
}

interface TabViewProps {
    tabs: Tab[];
}

const TabView: React.FC<TabViewProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="sm:flex">
            <div className="sm:flex flex-col mx-auto sm:pl-[30px]" >
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 pl-10  text-left my-10 uppercase ${activeTab === index ? ' text-[#242424] font-semibold' : ' text-[#242424] opacity-50 font-semibold'
                            } hover:text-[#242424] hover:opacity-100`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="w-[95%] sm:w-[80%] mx-auto">
                <div className="sm:p-4">{tabs[activeTab].content}</div>
            </div>
        </div>
    );
};

export default TabView;
