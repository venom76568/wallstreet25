export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const ErrorHelperText = (props: { error?: string }) => {
  const { error } = props;
  return (
    <span
      className={`error-text mt-2 ml-1 transition-all duration-300 ${error ? "opacity-100" : "opacity-0"
        }`}
    >
      {error}
    </span>
  );
};