import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";
function App() {
  return (
    <>
      <Heading title={"TypeScript Basics"} />
      <Section>Typescript Tutorial From Youtube</Section>
      <Counter />
      <List
        items={["☕ Coffee", "🍟 Fries", "👨‍💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
