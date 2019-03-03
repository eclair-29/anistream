import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import common from "../../utils/config/common"
import { Link } from "react-router-dom";

const Breadcrumbs = ({ match }) => {
  const links = {
    rootLink: <Link to={match.url}>{common.season} {common.year} Season Anime</Link>
  };

  // ...
  // SEASON BREADCRUMB (ROOT)
  // ...
  const seasonBreadcrumbItem = match.path
    ? <BreadcrumbItem active>{common.season} {common.year} Season Anime</BreadcrumbItem>
    : <BreadcrumbItem>{links.rootLink}</BreadcrumbItem>

  return (
    <Breadcrumb>
      {seasonBreadcrumbItem}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
