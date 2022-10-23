import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchData } from './FetchData/FetchData';
import { Loader } from './Loader/Loader';
import { ButtonMore } from './ButtonMore/ButtonMore';

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
    // console.log('Сработала функция componentDidMount');
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      try {
        const { totalHits, hits } = await FetchData(
          this.state.keyword,
          this.state.currentPage
        );

        this.setState({
          totalPages: totalHits,
          data: hits,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (prevState.currentPage !== this.state.currentPage) {
      try {
        const { hits } = await FetchData(
          this.state.keyword,
          this.state.currentPage
        );

        this.setState({
          data: [...this.state.data, ...hits],
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleKeywordChange = keyword => {
    this.setState({ keyword, isLoading: true, currentPage: 1 });
  };
  handleCurrentPageChange = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  render() {
    const { isLoading, totalPages } = this.state;
    return (
      <div>
        <Searchbar sendSubmitKeyword={this.handleKeywordChange} />
        {!isLoading && <ImageGallery response={this.state.data} />}
        {isLoading && <Loader color={'#4752b1'} size={150} marginTop={100} />}
        {totalPages > 12 && (
          <ButtonMore onClick={this.handleCurrentPageChange} />
        )}
      </div>
    );
  }
}
