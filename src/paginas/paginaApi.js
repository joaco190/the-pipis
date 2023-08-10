import React from 'react';

class PaginaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  fetchDogImage() {
    const uniqueParam = new Date().getTime();
    const apiUrl = `https://dog.ceo/api/breeds/image/random?${uniqueParam}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          imageUrl: data.message,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { imageUrl, isLoading } = this.state;

    return (
      <div className="container text-center pb-4">
        {isLoading ? (
          <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Cargando...</span>
          </div>
        ) : (
          imageUrl && <img src={imageUrl} alt="Dog" className='img-fluid'/>
        )}
      </div>
    );
  }
}

export default PaginaApi;
