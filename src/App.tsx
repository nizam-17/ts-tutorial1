import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";
function App() {
  return (
    <>
      <Heading title={"8"} />
      <Section>nnn</Section>
      <Counter />
      <List
        items={["☕ Coffee", "🍟 Fries", "👨‍💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
