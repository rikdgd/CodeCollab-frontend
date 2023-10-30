'use client';

import Editor from '@monaco-editor/react';
import { useRef, useEffect, useState } from 'react';
import FileService from '../services/FileService';


export default function CodeEditor() {
    
    const editorRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const fileService = new FileService();
    
    
    
    useEffect(() => {
        const LoadFileContents = async () => {
            while(!editorRef.current) {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            
            setIsLoaded(true);
        }
        
        LoadFileContents();
    });
    
    useEffect(() => {
        async function fetchData() {
            let fileContents = await fileService.GetFileContext("test.js");
            fileContents = fileContents.data;
            console.log(fileContents);
            
            SetEditorContents(fileContents)
        }
        
        fetchData();
    }, [fileService, isLoaded]);
    
    
    
    function onEditorMount(editor, monaco) {
        editorRef.current = editor;
    }
    
    
    
    function GetEditorContents() {
        if (editorRef.current) {
            return editorRef.current.getValue();
        } else {
            console.error("Could not get editor contents");
        }
    }
    
    function SetEditorContents(newContents) {
        if (editorRef.current) {
            editorRef.current.setValue(newContents);
        } else {
            console.error("Could not set editor contents");
        }
    }
    
    
    
    // async function LoadFileContents() {
    //     let fileContents = await fileService.GetFileContext("test.js");
    //     fileContents = fileContents.data;
    //     console.log(fileContents);
        
    //     SetEditorContents(fileContents)
        
    //     return fileContents;
    // }
    
    async function SaveFileContents() {
        const editorContents = GetEditorContents();
        const res = await fileService.SaveFileContext("test.cs", editorContents);
        console.log(res.data);
    }
    
    
    
    return (
        <div>
            <Editor height="800px" width="1400px" defaultLanguage='csharp' defaultValue='//start editing code' onMount={onEditorMount}/>
            <button onClick={SaveFileContents} className='bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-500'>test</button>
        </div>
    );
} 
