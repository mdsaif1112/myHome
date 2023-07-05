import { useQuery } from 'react-query';
import axios from 'axios';


const useLatestProperties = () => {

    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axios('/api/latestProperties')

            return res.data
        }
    })

    return { properties, isLoading, refetch }
};

export default useLatestProperties;