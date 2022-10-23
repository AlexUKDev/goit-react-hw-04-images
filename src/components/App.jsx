import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchData } from './FetchData/FetchData';
import { Loader } from './Loader/Loader';

// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export default class App extends Component {
  state = {
    data: [],
    totalPages: null,
    currentPage: 1,
    isLoading: false,
    keyword: '',
  };
  componentDidMount() {
    console.log('Сработала функция componentDidMount');
  }
  async componentDidUpdate(prevProps, prevState) {
    const { keyword, currentPage } = this.state;
    if (keyword !== prevState.keyword) {
      // console.log('this.state.keyword: ', keyword);
      // console.log('prevState.keyword: ', prevState.keyword);
      // console.log('Inside if ( !== ) :', keyword !== prevState.keyword);
      try {
        const { totalHits, hits } = await FetchData(keyword, currentPage);
        this.setState({
          totalPages: totalHits,
          data: hits,
          isLoading: false,
        });
        // console.log('totalHits : ', totalHits, 'hits : ', hits);
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleKeywordChange = keyword => {
    this.setState({ keyword, isLoading: true });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Searchbar
          sendSubmitKeyword={this.handleKeywordChange}
          notify={this.notify}
        />
        {!isLoading && <ImageGallery response={this.state.data} />}
        {isLoading && <Loader color={'#4752b1'} size={150} marginTop={100} />}
      </>
    );
  }
}
