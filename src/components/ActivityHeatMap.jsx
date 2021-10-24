import { Link } from 'react-router-dom';
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';

export default function ActivityHeatMap({ id, value }){
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