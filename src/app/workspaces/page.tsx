'use client'

import { useState } from "react";
import WorkspaceService from '../services/WorkspaceService'



export default function Workspaces() {
    
    const [formData, setFormData] = useState({
        name: '',
        ownerId: ''
    });
    
    
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    
    async function onSubmit(event: any) {
        event.preventDefault();
        console.log(`The following data was submitted:\n name: ${formData.name}\n ownerId: ${formData.ownerId}`);
        
        const success = await WorkspaceService.createWorkspace(formData);
    }
    
    
    
    return (
        <div className="container mx-auto mt-10">
            <p className="text-2xl text-gray-700 mb-8">Create Workspace</p>
            <form onSubmit={onSubmit}>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Workspace name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="appearance-none border mb-8 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter workspace name"
                    onChange={handleChange}
                />
                
                <label htmlFor="ownerId" className="block text-gray-700 text-sm font-bold mb-2">OwnerId - temp solution</label>
                <input
                    type="number"
                    id="ownerId"
                    name="ownerId"
                    className="appearance-none border mb-8 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="enter you account id"
                    onChange={handleChange}
                />
                
                <button type="submit">Create workspace</button>
            </form>
        </div>
    );
}
