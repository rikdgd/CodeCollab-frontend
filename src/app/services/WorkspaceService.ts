import Axios from "axios";


class WorkspaceService {
    
    url = 'https://localhost:7240/Workspace';
    
    async getWorkspace() {
        try {
            const response = await Axios.get(this.url);
            return response;
        } catch (err) {
            console.error(err);
            return 'Failed to get workspace data.';
        }
    }
}


const workspaceService = new WorkspaceService();
export default workspaceService;
