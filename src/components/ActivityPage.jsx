// App Imports.
import useQuery from '../hooks/useQuery';

// Activity Component.
export default function ActivityPage() {
    const query = useQuery();
    return (
        <main>
            <h1>{query.get('id')}</h1>
        </main>
    );
}