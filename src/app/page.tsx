
import ExplorePackages from '@/components/explore-packages';
import Footer from '@/components/footer';
import FooterBar from '@/components/footer/footer-bar';
import Navbar from '@/components/navbar';
import Search from '@/components/search';

const page = () => {
  return (
    <>
      <Navbar />
      <Search />
      <ExplorePackages />
      <FooterBar />
      <Footer />
    </>
  )
}

export default page;
