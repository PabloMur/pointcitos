type SectionTitleType = {
  text: string;
};
const SectionTitle = ({ text }: SectionTitleType) => {
  return <h3 className="text-black p-4 font-bold text-2xl">{text}</h3>;
};

export { SectionTitle };
