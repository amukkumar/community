"use client"

import React, { useState } from 'react'
import { Toggle, ToggleButton } from '@/components/ui/toggleButton';

const subjects = [
    { id: 1, subject: "Mathematics" },
    { id: 2, subject: "Science" },
    { id: 3, subject: "English" }
];

const myp = [
    { id: 1, subject: "MYP 1" },
    { id: 2, subject: "MYP 2" },
    { id: 3, subject: "MYP 3" }
];

const criteria = [
    { id: 1, subject: "Criteria A" },
    { id: 2, subject: "Criteria B" },
    { id: 3, subject: "Criteria C" },
    { id: 4, subject: "Criteria D" }
];

const difficulty = [
    { id: 1, subject: "Easy" },
    { id: 2, subject: "Medium" },
    { id: 3, subject: "Hard" },
];

const type = [
    { id: 1, subject: "Academic" },
    { id: 2, subject: "QuestionsGeneral" },
    { id: 3, subject: "DoubtsResources" },
];

const Filters = () => {
    const [selMYP, setSelMYP] = useState(null);
    const [selSubject, setSelSubject] = useState(null);
    const [selCriteria, setSelCriteria] = useState(null);
    const [selDifficulty, setSelDifficulty] = useState(null);
    const [selType, setSelType] = useState(null);

    return (
        <div className='border w-full px-3 py-1 rounded-md sticky top-[73px] mt-2' style={{ minHeight: "calc(100vh - 80px)" }}>
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold'>Apply Filters</h3>
                <span className='text-sm text-primary'>Reset All</span>
            </div>
            <hr className='my-2'></hr>
            <div className='mt-4'>
                <h6 className='text-sm text-gray-500'>MYP</h6>
                <Toggle multiple value={selMYP} onChange={(val) => setSelMYP(val)}>
                    {myp.map((item) => (
                        <ToggleButton key={item.id} value={item.id}>
                            {item.subject}
                        </ToggleButton>
                    ))}
                </Toggle>
            </div>

            <div className='mt-4'>
                <h6 className='text-sm text-gray-500'>Type</h6>
                <Toggle multiple value={selType} onChange={(val) => setSelType(val)}>
                    {type.map((item) => (
                        <ToggleButton key={item.id} value={item.id}>
                            {item.subject}
                        </ToggleButton>
                    ))}
                </Toggle>
            </div>

            <div className='mt-4'>
                <h6 className='text-sm text-gray-500'>Criteria</h6>
                <Toggle multiple value={selCriteria} onChange={(val) => setSelCriteria(val)}>
                    {criteria.map((item) => (
                        <ToggleButton key={item.id} value={item.id}>
                            {item.subject}
                        </ToggleButton>
                    ))}
                </Toggle>
            </div>

            <div className='mt-4'>
                <h6 className='text-sm text-gray-500'>Difficulty</h6>
                <Toggle multiple value={selDifficulty} onChange={(val) => setSelDifficulty(val)}>
                    {difficulty.map((item) => (
                        <ToggleButton key={item.id} value={item.id}>
                            {item.subject}
                        </ToggleButton>
                    ))}
                </Toggle>
            </div>

            <div className='mt-4'>
                <h6 className='text-sm text-gray-500'>Subjects</h6>
                <Toggle value={selSubject} onChange={(val) => setSelSubject(val)}>
                    {subjects.map((item) => (
                        <ToggleButton key={item.id} value={item.id}>
                            {item.subject}
                        </ToggleButton>
                    ))}
                </Toggle>
            </div>
        </div>
    )
}

export default Filters