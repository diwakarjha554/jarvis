import getCurrentUser from '@/actions/getCurrentUser';
import Footer from '@/components/footer';
import FooterBar from '@/components/footer/footer-bar';
import Navbar from '@/components/navbar';

const RoutesLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const currentUser = await getCurrentUser();

    return (
        <>
            <Navbar currentUser={currentUser}/>
            {children}
            <FooterBar />
            <Footer />
        </>
    )
}

export default RoutesLayout;