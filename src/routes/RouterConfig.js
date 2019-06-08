import List from '../components/List';
import Table from '../components/Table';

export default {
    routes: [
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        }
    ]
}
