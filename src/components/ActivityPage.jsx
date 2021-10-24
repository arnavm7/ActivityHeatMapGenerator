// App Imports.
import useQuery from '../hooks/useQuery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import db from '../firebaseStuff';
import ActivityHeatMap from './ActivityHeatMap';

import { useState } from 'react';
// Activity Component.
export default function ActivityPage() {
    const query = useQuery();
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [activity, setActivity] = useState(null);

    
    useEffect(() => {
        console.log("HELLO");
        (async () => {
            const docSnap = await getDoc(doc(db, 'activities', query.get('id')))
            setActivity(docSnap); 
        })();
    }, [setActivity]);

    return (
        <main>
            {activity && (<>
            <h1>{activity.data().title}</h1>
            <ActivityHeatMap id={activity.id} value={activity.data().dateCount}></ActivityHeatMap>
            <h2> What days did you perform {query.get('id')}?</h2>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            <div style={{marginLeft: "5%",}}>
                <h2>How many times did you perform {query.get('id')} on this day?</h2>
            <TextField value={name}
            label="Enter a number"
            onChange={(e) => {
            setName(e.target.value);
            }}/>
      <h3>Your performed {query.get('id')} {name} times. </h3>
    </div>
            </>)}
        </main>
    );
}