import { TextField } from "@mui/material";

const Input = ({
  label,
  type,
  id,
  className,
  error,
  color,
  value,
  onChange,
  name,
}) => {
  return (
    <TextField
      id={id}
      type={type ?? "text"}
      label={label}
      variant="outlined"
      className={className}
      color={color}
      value={value}
      onChange={onChange}
      name={name ?? undefined}
      error={error ?? undefined}
    />
  );
};

export default Input;
