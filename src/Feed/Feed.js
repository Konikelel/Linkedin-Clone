import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import CreateIcon from '@mui/icons-material/Create';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { db } from '../Features/Firebase';
import { selectUser } from '../Features/UserSlice';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(
            query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
            (snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: serverTimestamp(),
        });
        setInput('');
    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type='text'
                        />
                        <button onClick={sendPost} type='submit'>
                            Send
                        </button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption
                        Icon={ImageIcon}
                        title='Photo'
                        color='#70B5F9'
                    />
                    <InputOption
                        Icon={SubscriptionsIcon}
                        title='Video'
                        color='#E7A33E'
                    />
                    <InputOption
                        Icon={EventNoteIcon}
                        title='Event'
                        color='#C0CBCD'
                    />
                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title='Write article'
                        color='#7FC15E'
                    />
                </div>
            </div>
            <FlipMove>
                {posts.map(
                    ({
                        id,
                        data: { name, description, message, photoUrl },
                    }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    )
                )}
            </FlipMove>
        </div>
    );
}

export default Feed;
