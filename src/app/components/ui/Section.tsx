
interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`flex justify-center w-full ${className}`}>
        {children}
    </section>
  )
}

export default Section;