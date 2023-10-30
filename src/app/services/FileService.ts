import Axios from 'axios';


class FileService {
    async GetFileContext(fileName: string) {
        const fileContext = await Axios.get('https://localhost:7000/files');
        return fileContext;
    }
    
    async SaveFileContext(fileName: string, fileContent: string) {
        try {
            const data = {
                fileName: fileName,
                fileContent: fileContent,
            };
            
            const response = await Axios.post('https://localhost:7000/files/saveFile', data);
            return response;
            
        } catch (e) {
            console.error('An error occured: ', e);
            return null;
        }
    }
}

export default FileService;
