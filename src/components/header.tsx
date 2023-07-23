export const Header = (props: { title: string }) => {
  return (
    <>
      <header className="py-1 px-4 font-bold text-base text-teal-500 bg-gray-50 border-b-[1px] border-grey-200">
        {props.title}
      </header>
    </>
  );
};
