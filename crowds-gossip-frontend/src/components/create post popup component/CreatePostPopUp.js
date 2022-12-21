import React,{useEffect,useState} from 'react';
import './Popup.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function CreatePostPopUp(props) {
    const [show, setShow] = useState(false);
    const hiddenFileInput = React.useRef(null)

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };
    const handleClick = ()=>{
        hiddenFileInput.current.click();
    }
    const fileSelectedHandler = (e)=>{
        console.log(e.target.files[0])
    }

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);
    return (
        <div
            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className={'overlay'}
        >
            <div className={'popup'}>
                <h2>Create Post</h2>
                <span className={'close'} onClick={closeHandler}>&times;</span>
                <textarea
                    rows={5}
                    className={'input'}
                    placeholder={"What's in your mind?"}
                />
                <AddPhotoAlternateIcon className={'add-photo'} onClick={handleClick}/>
                <input className={'add-photo'} type={'file'} ref={hiddenFileInput} placeholder='here' style={{display:"none"}} onChange={fileSelectedHandler}/>
            </div>
        </div>
    );
}

export default CreatePostPopUp;