import React,{useEffect,useState} from 'react';
import './Popup.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { addPost } from '../../API/Post.js';
import { IKUpload, IKContext } from 'imagekitio-react';
import config from '../../config'
function CreatePostPopUp(props) {
    const [show, setShow] = useState(false);
    const [postText, setPostText] = useState("")
    const hiddenFileInput = React.useRef(null)
    const [photo , setPhoto] = useState(undefined)
    const onError = err => {
        console.log("Error", err);
    };
      
    const onSuccess = res => {
        setPhoto(config.urlEndpoint+'/posts'+res.filePath)
    };
    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };
    const handleClick = ()=>{
        document.getElementById('upload').click()
    }
    const handlePostButton = async (e)=>{
        await addPost({content: postText,photo:photo})
        closeHandler(e)
        window.location.reload()
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
                <img src={photo} alt={""} onClick={handleClick} style={{width: '200px'}}/>

                <div className='confirmPost'>
                    <AddPhotoAlternateIcon className={'add-photo'} onClick={handleClick}/>
                    <IKContext 
                    publicKey={config.publicKey} 
                    urlEndpoint={config.urlEndpoint+'/users'}
                    authenticationEndpoint={config.authEndpoint} 
                    >
                        <IKUpload
                            onError={onError}
                            onSuccess={onSuccess}
                            id={'upload'}
                            style={{display:'none'}}
                        />
                    </IKContext>
                    <button onClick={() =>{handlePostButton()}}>Post</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePostPopUp;