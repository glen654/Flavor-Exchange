import {
  TextField,
  InputAdornment,
  IconButton,
  styled,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { SearchBarProps } from "../models/SearchBarProps";

// Search text field
const SearchTextField = styled(TextField)(function ({ theme }) {
  return {
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      "&.Mui-focused": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 14px",
    },
  };
});

// Searchbar component
export function SearchBar(props: SearchBarProps) {
  const { value, onChange, placeholder = "Search..." } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  function handleClear() {
    onChange("");
  }

  return (
    <SearchTextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton size="small" onClick={handleClear} edge="end">
              <CloseIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
}
