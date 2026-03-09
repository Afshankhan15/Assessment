type PlaceholderPageProps = {
  title: string;
};

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return <div className="p-6 text-xl font-semibold">{title} Page</div>;
}
