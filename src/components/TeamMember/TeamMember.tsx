import { Box, BoxProps, Typography, useTheme } from "@mui/material";

interface TeamMemberProps extends BoxProps {
  name: string;
  title: string;
  photo: string;
}

const TeamMember = (props: TeamMemberProps) => {
  const theme = useTheme();
  const { name, title, photo, sx } = props;

  return (
    <Box sx={{ textAlign: "center", ...sx }}>
      <img
        src={photo}
        alt="team member"
        width="240px"
        height="240px"
        style={{ borderRadius: "120px", marginBottom: theme.customSpacing.m }}
      />
      <Typography
        variant="h6"
        color="secondary.main"
        sx={{ marginBottom: theme.customSpacing.s }}
      >
        {name}
      </Typography>
      <Typography variant="body1" color="secondary.main">
        {title}
      </Typography>
    </Box>
  );
};

export default TeamMember;
