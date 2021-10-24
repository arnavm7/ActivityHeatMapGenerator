// App Imports.
import useQuery from '../hooks/useQuery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";

import { useState } from 'react';
// Activity Component.
export default function ActivityPage() {
    const query = useQuery();
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    return (
        <main>
            <h1>{query.get('id')}</h1>
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
            
        </main>
    );
}