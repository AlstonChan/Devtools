// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import illustration from "@/public/home/about/about.png";
import illustrationWebp from "@/public/home/about/about.webp";

import Image from "next/image";

import { Box, Container, Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

import SectionTitle from "../common/SectionTitle";

export default function HomeAbout() {
  const theme = useTheme();

  // styling
  const containerStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    my: {
      lg: theme.spacing(12),
      md: theme.spacing(8),
      xs: theme.spacing(12),
    },
  };
  const flexLeftStyle: SxProps<Theme> = {
    flex: "1 1 60%",
  };
  const bodyStyle: SxProps<Theme> = {
    textIndent: "35px",
    fontSize: {
      lg: theme.typography.h6.fontSize,
      md: theme.typography.body1.fontSize,
      sm: theme.typography.h6.fontSize,
      xs: theme.typography.body1.fontSize,
    },
  };
  const flexRightStyle: SxProps<Theme> = {
    flex: "1 1 40%",
    alignSelf: "center",
    px: { md: 0, sm: theme.spacing(10), xs: theme.spacing(1) },
    ml: theme.spacing(2),
  };

  // tsx return statement
  return (
    <Container sx={containerStyles} maxWidth="xl">
      <Box sx={flexLeftStyle}>
        <SectionTitle text="What is WebPouch" />
        <Typography paragraph variant="h6" sx={bodyStyle}>
          WebPouch is a comprehensive platform that offers web developers a
          collection of web development tools and services, such as PaaS, BaaS,
          Identity-as-a-service, and more. We provide developers to discover a
          wide range of services from different providers, allowing them to
          easily compare and contrast different options easily.
        </Typography>
        <br />
        <Typography paragraph variant="h6" sx={bodyStyle}>
          Our focus on free-tier services makes it an ideal tool for developers
          on a budget. The platform&apos;s user-friendly interface enables
          developers to view and compare different services based on various
          criteria such as pricing, features, and support, helping them in
          making informed decisions based on their specific project
          requirements.
        </Typography>
      </Box>
      <Box sx={flexRightStyle}>
        <picture>
          <source srcSet={illustrationWebp.src} type="image/webp" />
          <Image
            src={illustration}
            alt="Technology Illustration"
            style={{ width: "100%", height: "auto" }}
          />
        </picture>
      </Box>
    </Container>
  );
}
