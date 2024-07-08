import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";

const Search = () => {
  return (
    <Section className="mt-32 flex justify-center md:px-2">
        <Container className="border-2 shadow-sm dark:border-gray-700 rounded p-5 relative">
            <span className="absolute px-2 text-xl top-0 -translate-y-1/2 bg-white dark:bg-neutral-950 font-medium text-gray-800 dark:text-gray-50">
                Search
            </span>
        </Container>
    </Section>
  )
}

export default Search;