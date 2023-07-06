import { useQuery } from 'react-query';
import axios from 'axios';


const useLatestProperties = () => {

    const { data: latestProperties = [], isLoading, refetch } = useQuery({
        queryKey: ['latestProperties'],
        queryFn: async () => {
            const res = await axios('/api/latestProperties')

            return res.data
        }
    })

    return { latestProperties, isLoading, refetch }
};

export default useLatestProperties;