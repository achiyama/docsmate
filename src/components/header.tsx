export const Header = (props: { title: string }) => {
  return (
    <>
      <header className="py-1 px-2 font-bold text-base text-slate-100 bg-teal-500">
        {props.title}
      </header>
    </>
  );
};
