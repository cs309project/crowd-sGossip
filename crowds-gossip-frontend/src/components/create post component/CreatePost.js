import React,{useState} from 'react';
import './CreatePost.css'
import CreatePostPopUp from "../create post popup component/CreatePostPopUp";

function CreatePost({profileIcon}) {
    const [visibility, setVisibility] = useState(false);
    const popupCloseHandler = () => {
        setVisibility(false);
    };
    return (
        <div>
            <div className={'create-post'}>
                <img id={'profile-icon'} src={profileIcon} alt={""}/>
                <input
                    className='post-text'
                    type={'submit'}
                    value='Share your thoughts'
                    onClick={() => setVisibility(true)}
                />
            </div>
            <CreatePostPopUp
                onClose={popupCloseHandler}
                show={visibility}
            />
        </div>
    );
}

export default CreatePost;