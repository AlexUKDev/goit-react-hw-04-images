import { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchData } from './FetchData/FetchData';
import { Loader } from './Loader/Loader';
import { ButtonMore } from './ButtonMore/ButtonMore';
import { Notify } from 'notiflix';

export const App = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const memoizedCallback = useCallback(async () => {
    try {
      const { hits } = await FetchData(keyword, currentPage);
      if (hits.length === 0) {
        Notify.info('Oops, nothing was found for your query. Try again');
        return;
      }
      setData(prevData => [...prevData, ...hits]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [keyword, currentPage]);

  const handleKeywordChange = async keyword => {
    setKeyword(keyword);
    setIsLoading(true);
    setCurrentPage(1);

    try {
      const { totalHits, hits } = await FetchData(keyword, 1);
      console.log(hits);
      setData(hits);
      setTotalPages(totalHits);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCurrentPageChange = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (keyword === '') {
      return;
    }

    memoizedCallback();
  }, [keyword, currentPage, memoizedCallback]);

  return (
    <div>
      <Searchbar sendSubmitKeyword={handleKeywordChange} />
      {!isLoading && <ImageGallery response={data} />}
      {isLoading && <Loader color={'#4752b1'} size={150} marginTop={100} />}
      {totalPages > 12 && <ButtonMore onClick={handleCurrentPageChange} />}
    </div>
  );
};
