// App Imports.
import useQuery from '../hooks/useQuery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from 'react';
// Activity Component.
export default function ActivityPage() {
    const query = useQuery();
    const [startDate, setStartDate] = useState(new Date());
    return (
        <main>
            <h1>{query.get('id')}</h1>
            <h2> What days did you perform {query.get('id')}?</h2>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            
        </main>
    );
}