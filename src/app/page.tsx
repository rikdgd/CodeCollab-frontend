'use client';

import { useState } from "react";
import workspaceService from "./services/WorkspaceService"


export default function Home() {
    
    const [workspaceName, setWorkspaceName] = useState();
    
    async function getWorkspace() {
        let response: any = await workspaceService.getWorkspace();
        setWorkspaceName(response.data.name);
    }
    
    
    return (
        <main>
            <div>
                <h1>CodeCollab</h1>
                <br/>
                <div className="m-10">
                    <button onClick={getWorkspace} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Workspace data
                    </button>
                    <p className="bg-gray-200">Loaded workspace: {workspaceName}</p>
                </div>
            </div>
        </main>
  )
}
