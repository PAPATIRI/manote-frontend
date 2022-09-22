import PropTypes from 'prop-types';
import tw from 'twin.macro';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const PageContainer = tw.div`max-w-7xl mx-auto px-4 sm:px-6`;

export default function PageLayout(props) {
  const { children } = props;
  return (
    <PageContainer>
        <Header />
        {children}
        <Footer />
      </PageContainer>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};
