import Container from '@/app/components/ui/Container';
import Section from '@/app/components/ui/Section';
import { FaPhoneAlt } from 'react-icons/fa';
import Accordian from './payments-accordion';

const Payments = () => {
    return (
        <Section className='mt-28 px-1 md:px-2 text-gray-800 dark:text-gray-50'>
            <Container className='flex flex-col gap-5'>
                <h1 className='text-4xl md:text-5xl xl:text-6xl transition font-bold'>Payments</h1>
                <p className='font-medium'>
                    At Travel Trail Holidays, our mission is to design journeys that leave an indelible mark on travelers, unveiling the captivating essence of India&apos;s culture, heritage, and natural splendor. As a leading travel company specializing in bespoke India tour packages, we are committed to curating experiences that surpass expectations and forge enduring memories.
                </p>
                <div className={`flex justify-between flex-col md:flex-row gap-10 mt-10`}>
                    <div className={`w-full`}>
                        <div>
                            <span className={`font-semibold text-lg`}>
                                Select the desired payment option
                            </span>
                        </div>
                        <div className="mt-5">
                            <Accordian />
                        </div>
                    </div>

                    <div
                        className={`rounded-md bg-gray-200 dark:bg-gray-800 p-10 max-w-[450px] w-full h-[300px]`}
                    >
                        <div>
                            <div className={`text-[#FF5956] font-semibold text-xl`}>
                                <span>Get Help</span>
                            </div>
                            <div className={`font-semibold text-3xl mt-3`}>
                                <span>Have Any Query ?</span>
                            </div>
                            <div className={`text-[15px] mt-5`}>
                                <div>
                                    Need help with any payment related issue? Please feel free to
                                    contact us!
                                </div>
                            </div>
                            <div className={`text-[15px] mt-5`}>
                                <div className={`flex items-center gap-5`}>
                                    <div
                                        className={`bg-[#FF5956] rounded-full w-16 h-16 flex justify-center items-center text-gray-50`}
                                    >
                                        <FaPhoneAlt size={24} />
                                    </div>
                                    <div>
                                        <div>
                                            <span className={`font-semibold text-base`}>Call Us</span>
                                        </div>
                                        <div>
                                            <span className={`font-semibold text-lg`}>
                                                +91 9625992025
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`text-[#FF5956] w-full flex justify-center py-20 px-2 text-center font-medium`}
                >
                    <div>
                        Please kindly provide a screenshot confirming your successful
                        payment. Your cooperation is greatly appreciated.
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Payments;