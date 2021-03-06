import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "../list";

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Content>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <Html2React html={page.content.rendered} />
          </div>
        </div>
      </div>
    </Content>
  ) : null;
};

export default connect(Page);

const Content = styled.div`
  width: 100%;
  padding-top: 20px;
  position: relative;
  .wp-block-group__inner-container {
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
  }
  
  .col-auto {
    margin: auto;
  }
  .wp-block-column {
    padding: 15px;
  }
  .wp-block-column:not(:first-of-type) {
    margin-left: 0px;
  }
  input.wpcf7-form-control,
  .wpcf7-textarea {
    width: 100% !important;
  }
  .wpcf7-submit {
    background-color: #148fa8;
    color: #fff;
    border: none;
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 1230px) {
    .wp-block-group__inner-container {
      max-width: 1230px;
      padding-right: 15px;
      padding-left: 15px;
      width: 100%;
    }
  }

`;
