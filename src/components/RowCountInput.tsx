import { Stack } from "@mui/material";
import { useState } from "react";
import { StyledButton } from "~/components/button/StyledButton";
import { useItemCountContext } from "~/context/ItemCountContext";
import { StyledInput } from "./input/StyledInput";

interface RowCountInputProps {
  onReset: () => void;
}

export const RowCountInput = ({ onReset }: RowCountInputProps) => {
  const { itemCount, setItemCount } = useItemCountContext();

  const [inputValue, setInputValue] = useState(0);

  return (
    <Stack gap={1} alignItems="flex-start">
      <StyledInput
        disabled={!!itemCount}
        fullWidth
        // helperText={
        //   <Typography color="white" variant="caption">
        //     Enter a number between 1 and 1025 (valid range for pokemon API
        //     results in &quot;Heavy Virtualization Comparison&quot;)
        //   </Typography>
        // }
        id="virtualization-row-count"
        // inputProps={{ min: 0, max: 1025 }}
        inputProps={{ min: 0 }}
        label="Number of Virtualized Rows"
        onChange={(e) => {
          const numericValue = Number(e.target.value);

          // prevent changes outside the upper and lower bounds
          // if (numericValue >= 0 && numericValue <= 1025) {
          //   setInputValue(numericValue);
          // }

          if (numericValue >= 0) {
            setInputValue(numericValue);
          }
        }}
        type="number"
        value={inputValue}
      />

      <Stack direction="row" gap={1} width="100%">
        <StyledButton
          disabled={!inputValue || !!itemCount}
          onClick={() => setItemCount(inputValue)}
        >
          Apply
        </StyledButton>

        <StyledButton
          disabled={!itemCount}
          fullWidth
          onClick={() => {
            setInputValue(0);
            setItemCount(0);
            onReset();
          }}
        >
          Reset
        </StyledButton>
      </Stack>
    </Stack>
  );
};
