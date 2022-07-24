import React, {SyntheticEvent, useState} from 'react';
import { useAppDispatch } from '../../hooks';
import { uploadBookAsync } from './redux/actions';

export function BookUploader()
{
    const [fileName, setFileName] = useState<string>('');
    const [file, setFile] = useState<string>('');
    const [uploadEnabled, setUploadEnabled] = useState<boolean>(false);
    const fileInputRef : React.RefObject<HTMLInputElement> = React.createRef();

    const dispatch = useAppDispatch();

    const saveFile = (e : any) =>
    {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setUploadEnabled(true);
    };

    const uploadFile = (e: SyntheticEvent) =>
    {

        e.preventDefault();

        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);

        dispatch(uploadBookAsync(formData))
            .then(() => {
            setFile('');
            setFileName('');
            setUploadEnabled(false);
            })
            .then(() => fileInputRef.current.value = '');
    };

        return (
            <div className="mb-3" style={{width:'30%', marginLeft:'35%'}}>
                <label htmlFor="formFile" className="form-label">Select book:</label>
                <input ref={fileInputRef} onChange={saveFile} className="form-control" type="file" id="formFile" />
                <input disabled={!uploadEnabled} type='button' value='Upload' onClick={uploadFile}/>
            </div>
        );
}
