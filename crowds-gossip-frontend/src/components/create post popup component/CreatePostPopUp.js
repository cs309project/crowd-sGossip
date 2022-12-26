import React,{useEffect,useState} from 'react';
import './Popup.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { addPost } from '../../API/Post.js';

function CreatePostPopUp(props) {
    const [show, setShow] = useState(false);
    const [postText, setPostText] = useState("")
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
    const handlePostButton = async (e)=>{
        await addPost({author:'63a85f9e6193bc664dd2b824' ,content: postText})
        closeHandler(e)
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
                    onChange={(e)=> setPostText(e.target.value)}
                    rows={5}
                    className={'input'}
                    placeholder={"What's in your mind?"}
                />
                <div className='confirmPost'>
                    <AddPhotoAlternateIcon className={'add-photo'} onClick={handleClick}/>
                    <input className={'add-photo'} type={'file'} ref={hiddenFileInput} placeholder='here' style={{display:"none"}} onChange={fileSelectedHandler}/>
                    <button onClick={() =>{handlePostButton()}}>Post</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePostPopUp;