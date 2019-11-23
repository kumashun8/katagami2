import { Box, Button } from "@material-ui/core";

export default function (props) {
  const {
    id,
    detail,
    created_at,
    userId
  } = props;

  return (
    <li>
      <Box>
        <p>{detail}</p>
        <p>{created_at}</p>
      </Box>
    </li>
  );
}