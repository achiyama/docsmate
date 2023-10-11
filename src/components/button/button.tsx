type ButtonProps = {
  buttonName: string;
  onClick: () => void;
};

export const Button = (params: ButtonProps) => {
  return (
    <button
      onClick={params.onClick}
      className="dt-btn dt-bg-blue-500 dt-text-white dt-py-2 dt-px-4 dt-rounded dt-w-full">
      {params.buttonName}
    </button>
  );
};
