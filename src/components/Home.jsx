// Imports
import { Link } from 'react-router-dom';

// App Imports
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@material-ui/core';
import { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import useQuery from '../hooks/useQuery';

export default function Home() {
    const [show, setShow] = useState(false);
    console.log(show);
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
        <ActivityHeatMap id="123456" value={value}/>
        <ActivityHeatMap id="19765" value={value}/>
        <ActivityHeatMap id="19767" value={value}/>
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

function ActivityHeatMap({ id, value }){
    return(
    <Link to={`/activity?id=${id}`}>
            <HeatMap
                legendCellSize={13}
                rectSize={14}
                width={400}
                value={value}
                startDate={new Date('2016/01/01')}
                rectRender={
                    (props, data) => {
                        return (
                          <Tooltip key={props.key} placement="top" content={`count: ${data.count || 0}`}>
                            <rect {...props} />
                          </Tooltip>
                        );
                    }
                }
            />
        </Link>);

}

