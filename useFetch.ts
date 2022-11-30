const useFetch = (initialUrl: string) => {
    const [url, setUrl] = useState(initialUrl);
    const [value, setValue] = useState('');

    const fetchData = () => axios.get(url).then(({data}) => setValue(data));	

    useEffect(() => {
        fetchData();
    },[url]); //url이 바뀔때마다 새로 fetch하고 data를 업데이트 한다.
    return [value];
} 

export default useFetch;