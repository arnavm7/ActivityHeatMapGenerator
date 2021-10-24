import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import './Help.css';
export default function Help() {
    const value1 = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
      ];
      const value2 = [
        { date: '2016/02/03', count: 20 },
        { date: '2016/02/09', count: 95 },
        { date: '2016/02/19', count: 15 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/03/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/20', count: 27 },
        { date: '2016/05/01', count: 15 },
        { date: '2016/05/06', count: 9 },
        { date: '2016/05/07', count: 1 },
      ];
      const value3 = [
        { date: '2016/02/11', count: 2 },
        { date: '2016/02/12', count: 20 },
        { date: '2016/02/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/05/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/03', count: 2 },
        { date: '2016/06/11', count: 5 },
        { date: '2016/06/13', count: 5 },
        { date: '2016/06/20', count: 11 },
      ];
    return (
        <main>
            <div id = "activities-container">
            Studying
             <HeatMap
                legendCellSize={13}
                rectSize={14}
                width={400}
                value={value1}
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
            <div> 
            <h6>The darker the shade of green, the more frequently this user completed the activity</h6>
            </div>
            Songs listened to
            <HeatMap
                legendCellSize={13}
                rectSize={14}
                width={400}
                value={value2}
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
            Going to gym
            <HeatMap
                legendCellSize={13}
                rectSize={14}
                width={400}
                value={value3}
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
            <div id = "demo-log"> 
            CREATE NEW ACTIVITY LOG  
            </div>
            <div id = "explanation">
            <h6>The "CREATE NEW ACTIVITY LOG" button above creates a pop up window 
            for the user to enter in the name of their new activity log.</h6>
            </div>
            </div>
        </main>
    );
}