import Axios from 'axios';



interface WorkspaceData {
    name: string;
    ownerId: string;
}



class FileService {
    
    /**
     * Retrieves a workspace by its ID.
     *
     * @param {number} id - The ID of the workspace to retrieve.
     * @return {Promise<any>} The data of the workspace if successful, otherwise the error message received by workspace service.
     */
    async getWorkspaceById(id: number) {
        const res = await Axios.get('https://localhost:7240/workspaces/' + id);
        
        if (res.status == 200) {
            return res.data;
        } else {
            const errMessage = `error ${res.status}: ${res.statusText}`;
            console.log(errMessage);
            return errMessage;
        }
    }
    
    /**
     * Creates a new workspace using the provided workspace data.
     *
     * @param {WorkspaceData} workspaceData - The data for the new workspace.
     * @returns {boolean} - Returns true if the workspace was created successfully, otherwise false.
     */
    async createWorkspace(workspaceData: WorkspaceData) {
        const result = await Axios.post('https://localhost:7240/Workspace/CreateWorkspace', workspaceData);
        
        if (result.status == 200) {
            return true;
        }
        
        return false;
    }
}


const service = new FileService();
export default service;
