type SectionTitleType = {
  text: string;
};
const SectionTitle = ({ text }: SectionTitleType) => {
  return <h3 className="text-black p-2 font-bold text-xl">{text}</h3>;
};

export { SectionTitle };
