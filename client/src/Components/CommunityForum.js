import React from "react";
import ForumHeader from "./ForumHeader";
import ForumSidebar from "./ForumSidebar";
import Feed from "./Feed";
import "./CSS/CommunityForum.css"

function CommunityForum() {
  return (
    <div className="communityForum">
      <ForumHeader />
      <div className="forumTitle">
        <h1>Welcome to the Community Forum</h1>
        <h3>
          Sign in to ask a question or share your favorite tiny house obsession
        </h3>
      </div>

      <div className="communityForum__body">
        <Feed />
      </div>
    </div>
  );
}

export default CommunityForum;
