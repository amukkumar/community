import React from 'react'
import Header from "@/components/mycomponents/header";
import Filters from "@/components/mycomponents/filters";
import SubjectGroup from "@/components/mycomponents/subjectGroup";

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <Header />
            <div className='flex gap-2 px-2 justify-center container'>
                <div className='w-64 hidden md:block'>
                    <SubjectGroup />
                </div>
                {children}
                <div className='w-64 hidden lg:block'>
                    <Filters />
                </div>
            </div>
        </div>
    )
}

export default MainLayout