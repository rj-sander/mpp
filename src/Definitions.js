import React from "react";
import {ReactComponent as Phone} from "./phone.svg";

function Definitions() {
    return (<div>
        <div className="container">
<h2>Covert and Overt Surveillance</h2>
<p>The Surveillance Commissioner's Guidance defines overt social media monitoring as looking at 'open source' data, being publicly available data and data where privacy settings are available but not applied. This may include:
    <ul><li>List of other uses with whom an indiviudal shares a connection (friends/followers);</li>
 		<li>Users’s public posts: audio, images, video content, messages</li>
 		<li>Likes, shared posts and events</li></ul>

“Repetitive examination/monitoring of public posts as part of an investigation” constitutes instead 'covert' monitoring and “must be subject to assessment and may be classed as Directed Surveillance as defined by RIPA.”</p></div>
<Phone style={{width: '50vw', display: 'inline-block', float: "right"}}/>
<div className="container">
<p>When talking about surveillance, it is helpful to use two key definitions: covert and overt. The Surveillance Commissioner’s Guidance defines overt social media monitoring as looking at ‘open source’ data, publicly available data and data where privacy settings are available but not applied. This, in practice, means anything that exists online that doesn’t require circumventing privacy tools to access. This could include a user's profile pages and posts, posts they’ve interacted with, their followers and the accounts they follow. Surveillance may be covert once there are repeated examinations of the same source. Once this happens, it should be classed as Direct Surveillance and come under the legal framework of the Regulatory of Investigative Powers (RIPA) Act. Covert surveillance requires much more oversight and authorisation. However, these guidelines are difficult to apply in the world of social media; you can scroll through a person’s entire Instagram profile while technically staying on the same web page, so is that overt? What constitutes repeated views in the infinite scroll world?
    <br />    <br />
    With guidance this vague, it is up to individual councils to set their own standards. 
</p>
</div>
<div className="container">
</div>
</div>
    );
}

export default Definitions;