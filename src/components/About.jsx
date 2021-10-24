// App Imports.
import useQuery from '../hooks/useQuery';
import { useState } from 'react';
import './About.css';
export default function About() {
    const query = useQuery();
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    return (
        <main>
            <h1>ABOUT APP</h1>
            This activity tracker is a web application that allows users to keep track of their
                 activities on heat maps along with their frequency. The user is able to add logs for 
                new activities, and adjust previous logs with new data. To update, each specific log takes 
                in a date along with the number of times the activity was completed that day.
            <h1>TECH USED</h1>
            <table class="table">
                <tr>
                    <td>React (JS)</td>
                </tr>
                <tr>
                    <td>HTML</td>
                </tr>
                <tr>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>FireBase</td>
                </tr>
                <tr>
                    <td>Figma</td>
                </tr>
            </table>

            <h1>MADE BY</h1>
            Adilnur Istekov
            <br />
            Timothy Voelker
            <br />
            Anthony Reis
            <br />
            Arnav Mangal
        </main>
    );
}