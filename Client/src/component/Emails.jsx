
import { Box, Typography, Checkbox } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const Email = ({ email }) => {
    return (
       <Box>
            <Checkbox />
            <StarBorder />
            <Typography>{email.name}</Typography>
            <Typography>Inbox</Typography>
            <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
            <Typography>
                {(new window.Date(email.date)).getDate()}
                {(new window.Date(email.date)).toLocaleString()}
            </Typography>
       </Box>
    )
}

export default Email;