import React from "react";
import phone from "./phone-icon.png";

function Definitions() {
    return (<div>
        <div style={{width: '35vw', display: 'inline-block'}}>
<h2>Covert and Overt Surveillance</h2>
<p>The Surveillance Commissioner's Guidance defines overt social media monitoring as looking at 'open source' data, being publicly available data and data where privacy settings are available but not applied. This may include:
    <ul><li>List of other uses with whom an indiviudal shares a connection (friends/followers);</li>
 		<li>Users’s public posts: audio, images, video content, messages</li>
 		<li>Likes, shared posts and events</li></ul>

“Repetitive examination/monitoring of public posts as part of an investigation” constitutes instead 'covert' monitoring and “must be subject to assessment and may be classed as Directed Surveillance as defined by RIPA.”</p></div>
<img src={phone} alt="phone" style={{width: '35vw', display: 'inline-block'}}/>
</div>
    );
}

export default Definitions;