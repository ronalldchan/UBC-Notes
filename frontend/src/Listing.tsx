import { Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"

export default function Listing() {
    const items = ["1", "2","3", "4", "5"];

    return (
        <>
            <Box sx={{ width:"1000px", display: "flex", flexDirection:"column", borderRadius: 2, p: 2, color:"#737373", backgroundColor:"#FFFFFF"}}>
                <Stack direction={"column"}>
                    {items.map((item) => {
                        return <Typography>{item}</Typography>
                    })}
                </Stack>
            </Box>
        </>
    )
}