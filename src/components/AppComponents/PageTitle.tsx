import { Breadcrumbs, Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface BreadCrumb {
  href?: string;
  title: string;
  onClick?: () => void;
  buttonColor?: string;
}
export interface PageTitleProps {
  title: string;
  breadcrumbs: Array<BreadCrumb>;
  rightNav?: Array<BreadCrumb>;
}
const PageTitle = (props: PageTitleProps) => {
  const { title, breadcrumbs, rightNav } = props;

  const renderLink = (
    breadcrumb: BreadCrumb,
    index: number,
    variant?: "text" | "outlined" | "contained",
  ) => {
    if (breadcrumb.onClick) {
      return React.createElement(
        Button,
        {
          key: `breadcrumb_${index}`,
          variant: variant ? variant : "text",
          onClick: breadcrumb.onClick,
          style: { background: breadcrumb.buttonColor },
        },
        breadcrumb.title,
      );
    }

    return React.createElement(
      breadcrumb.href ? (Link as never) : Typography,
      {
        ...{ key: `breadcrumb_${index}`, to: breadcrumb.href },
        ...{ color: breadcrumb.href ? "inherit" : "textPrimary" },
      },
      breadcrumb.title,
    );
  };

  return (
    <div>
      <Typography variant="h3" component="h3" align={"left"}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) =>
              renderLink(breadcrumb, index),
            )}
          </Breadcrumbs>
        </Grid>
        <Grid
          container
          xs={4}
          justifyContent={"flex-end"}
          alignItems={"center"}
          style={{ paddingRight: 10 }}
        >
          <Breadcrumbs aria-label="breadcrumb" style={{ color: "blue" }}>
            {rightNav?.map((breadcrumb, index) =>
              renderLink(breadcrumb, index, "contained"),
            )}
          </Breadcrumbs>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageTitle;
