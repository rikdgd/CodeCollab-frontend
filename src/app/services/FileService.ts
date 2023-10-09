import Axios from 'axios';


class FileService {
    async GetFileContext(fileName: string) {
        const fileContext = await Axios.get('https://localhost:7000/files');
        return fileContext;
    }
    
    SetFileContext(fileName: string, fileContents: string) {
        console.log("SetFileContext");
    }
}

export default FileService;
