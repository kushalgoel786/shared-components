interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const RoundButton = ({ children, onClick }: ButtonProps) => (
  <button
    className="rounded bg-blue-500 hover:bg-blue-600 font-medium text-white px-4 py-2"
    onClick={onClick}>
    {children}
  </button>
);

export default RoundButton;
