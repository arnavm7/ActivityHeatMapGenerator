
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';

export default function Home() {
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
      
    return(
        <>
            <h1>Hello, World!</h1>
        <HeatMap legendCellSize={13} rectSize={14} width={400} value={value} startDate={new Date('2016/01/01')}       rectRender={(props, data) => {
        // if (!data.count) return <rect {...props} />;
        return (
          <Tooltip key={props.key} placement="top" content={`count: ${data.count || 0}`}>
            <rect {...props} />
          </Tooltip>
        );
      }}/>
            
        </>
    );
}