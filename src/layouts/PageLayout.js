import PropTypes from 'prop-types'
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function PageLayout(props) {
  const {children} = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
