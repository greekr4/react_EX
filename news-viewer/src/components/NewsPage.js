import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
    const params = useParams();
    //카테고리 미선택 = null
    const category = params.category || 'all';

    return(
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;