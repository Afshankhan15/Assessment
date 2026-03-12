type PlaceholderPageProps = {
  title: string;
};

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="p-[3.7rem] text-subtitle font-semibold">{title} Page</div>
  );
}
