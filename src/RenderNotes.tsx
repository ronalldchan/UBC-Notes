import { Note } from "./Note";
import { Box, Stack, Typography } from "@mui/material";

export function RenderNotes(props: { notes?: Note[] | null }) {
  return (
    <ul>
      {props.notes?.map((item) => (
        <Typography aria-label="testtesttest">{item.date}</Typography>
      ))}
    </ul>
  );
  //     <Stack>
  //     {props.notes.map((item) => {
  //       return (
  //         <>
  //           <Typography>{item.date}</Typography>
  //           <img src={item.imageUrl} />;
  //         </>
  //       );
  //     })}
  //   </Stack>;
}
