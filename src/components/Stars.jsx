import Star from './Star';
import PropTypes from 'prop-types';

const Stars = ({count}) => {

  const getStarList = () => {
    let list = [];
    
    if ( 0 < count
      && count <= 5
      && typeof(count) === 'number') {

      for (let i = 0; i < count; i++) {
        list.push(<li key={i}><Star /></li>)
      }

    }
    return list;
  }

  return (
    <ul className="card-body-stars u-clearfix">
       { getStarList()}
    </ul>
  )
};

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;
