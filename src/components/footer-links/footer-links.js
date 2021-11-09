/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal footer links component.
 */

// Core dependencies
import React from "react";

// App dependencies
import FooterLink from "../footer-link/footer-link";
import { FooterQuery } from "../../hooks/footer-query";

// Styles
import * as compStyles from "./footer-links.module.css";

function FooterLinks(props) {
  const { onFeedbackClicked } = props;
  const feedbackLink = { name: "Feedback", clickFn: onFeedbackClicked };
  const links = FooterQuery();
  links.push(feedbackLink);

  return (
    <div className={compStyles.links}>
      {links.map(({ clickFn, name, path }) => (
        <FooterLink key={name} clickFn={clickFn} name={name} path={path} />
      ))}
    </div>
  );
}

export default FooterLinks;
