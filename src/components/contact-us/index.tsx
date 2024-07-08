import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";

const Contact = () => {
  return (
    <Section className='mt-28 px-1 md:px-2 text-gray-800 dark:text-gray-50'>
      <Container className='flex flex-col gap-5'>
        <h1 className='text-4xl md:text-5xl xl:text-6xl transition font-bold'>Contact Us</h1>
        <p className='font-medium'>
          At Travel Trail Holidays, our mission is to design journeys that leave an indelible mark on travelers, unveiling the captivating essence of India&apos;s culture, heritage, and natural splendor. As a leading travel company specializing in bespoke India tour packages, we are committed to curating experiences that surpass expectations and forge enduring memories.
        </p>
      </Container>
    </Section>
  )
}

export default Contact;