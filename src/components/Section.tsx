import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({ title="Feb 28 2024", children }: SectionProps) => {
  return (
    <div>
      {" "}
      <h2>{title}</h2>
      <section>{children}</section>
    </div>
  );
};

export default Section;
