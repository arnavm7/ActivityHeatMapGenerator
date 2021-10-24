// Imports
import { useEffect } from 'react';
import { getDocs, collection} from 'firebase/firestore';
import db from '../firebaseStuff.js';
import ActivityHeatMap from './ActivityHeatMap.jsx';

// App Imports
import Modal from 'react-bootstrap/Modal'
import { Button } from '@material-ui/core';
import { useState } from 'react';
import TextField from "@material-ui/core/TextField";
<<<<<<< Updated upstream
import useQuery from '../hooks/useQuery';
import './Home.css'
=======
>>>>>>> Stashed changes

export default function Home() {
    const [show, setShow] = useState(false);
    const [activities, setActivities] = useState(null);

    useEffect(() => {
        console.log("HELLO");
        (async () => {
            const querySnapshot = await getDocs(collection(db, "activities"));
            const activitiesDocs = []
            querySnapshot.forEach(doc => activitiesDocs.push(doc));
            setActivities(activitiesDocs); 
        })();
    }, [setActivities]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const value = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
      ];
    const [name, setName] = useState("");

    return(
        <main>
            {activities && activities.map((doc) => {
                console.log("doc");
                return (<ActivityHeatMap key={doc.id} id={doc.id} value={doc.data().dateCount}/>)
            })}
            <Button variant="primary" onClick={handleShow} >
                Create New Activity log
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                <Modal.Title>Add a New Activity Log</Modal.Title>
                </Modal.Header>
                <Modal.Body>Enter Activity Name:  
                <TextField value={name}
            onChange={(e) => {
            setName(e.target.value);
            }}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
}

