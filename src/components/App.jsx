import { useState, useEffect } from 'react';
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

  async function getData(keyword, currentPage) {
    try {
      const { totalHits, hits } = await FetchData(keyword, currentPage);
      if (hits.length === 0) {
        setData([]);
        setTotalPages(0);
        Notify.info('Oops, nothing was found for your query. Try again');
        return;
      } else {
        setData(prevData => [...prevData, ...hits]);
        setTotalPages(totalHits);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeywordChange = async keyword => {
    setKeyword(keyword);
    setData([]);
    setIsLoading(true);
    setCurrentPage(1);
  };

  const handleCurrentPageChange = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (keyword === '') {
      return;
    }
    getData(keyword, currentPage);
  }, [keyword, currentPage]);

  return (
    <div>
      <Searchbar sendSubmitKeyword={handleKeywordChange} />
      {!isLoading && <ImageGallery response={data} />}
      {isLoading && <Loader color={'#4752b1'} size={150} marginTop={100} />}
      {totalPages > 12 && <ButtonMore onClick={handleCurrentPageChange} />}
    </div>
  );
};
