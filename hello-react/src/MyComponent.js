import PropTypes from 'prop-types';

const MyComponent = ({name,children,favoriteNumber}) =>{
  return <div>컴포넌트 props {name}
  <br/>
  children 값은 {children}
<br/>
입력받은 숫자 : {favoriteNumber}
  </div>  
};

MyComponent.defaultProps = {
 name: '기본 이름'
};

MyComponent.propTypes = {
name: PropTypes.string,
favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;