"use client"
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { FileText, Image, File } from 'lucide-react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { setToken } from '@/lib/store/features/globalSlice'

const CreatePost = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            if (selectedFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(selectedFile);
                setFilePreview(<img src={imageUrl} alt="Selected Image" className="w-full h-64 object-contain" />);
            } else if (selectedFile.type === 'application/pdf') {
                const pdfUrl = URL.createObjectURL(selectedFile);
                setFilePreview(<iframe src={pdfUrl} title="PDF Preview" className="w-full h-64" />);
            } else {
                setFilePreview(
                    <div className="flex items-center gap-2">
                        <File size={30} className="text-gray-600" />
                        <span>Preview not supported: {selectedFile.name}</span>
                    </div>
                );
            }
        }
    }

    const handleButtonClick = (fileType) => {
        const input = document.createElement('input');
        input.type = 'file';

        if (fileType === 'image') {
            input.accept = 'image/*';
        } else if (fileType === 'document') {
            input.accept = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx';
        }

        input.onchange = handleFileChange;
        input.click();
    }

    const doPost = () => {
        if (text == '') {
            toast.error("Caption should not be empty")
        } else {
            // Accessing the data in localStorage or sessionStorage
            //const sharedData = JSON.parse(localStorage.getItem('sharedData'));
            // or
            const sharedData = JSON.parse(sessionStorage.getItem('sharedData'));
            if (sharedData) {
                console.log('User:', sharedData.user);
                console.log('Age:', sharedData.age);
            }
            dispatch(setToken(text))
        }
    }

    return (
        <div className='min-h-36 pt-3'>
            <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your message here." />
            <div className='mt-3'>
                {filePreview}
            </div>
            <div className='py-3 flex justify-between items-center mt-3'>
                <div className='flex gap-5'>
                    <div className='cursor-pointer flex flex-col items-center' onClick={() => handleButtonClick('image')}>
                        <Image size={30} className='text-sky-600' />
                        <span className='text-xs'>Image</span>
                    </div>
                    <div className='cursor-pointer flex flex-col items-center' onClick={() => handleButtonClick('document')}>
                        <FileText size={30} className='text-violet-600' />
                        <span className='text-xs'>Document</span>
                    </div>
                </div>
                <Button className='h-auto rounded-full text-md font-semibold' onClick={doPost}>Post</Button>
            </div>
        </div>
    )
}

export default CreatePost