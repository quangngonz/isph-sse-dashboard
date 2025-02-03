import {parsedChangelog} from "../../data/parsed_changelog";
import Phase from "./Phase";
import * as React from "react";

const ChangelogTable = () => {
    return (
        <div style={{padding: '20px'}}>
            {parsedChangelog.map((phase, index) => (
                <Phase key={index} {...phase} />
            ))}
        </div>
    );
}

export default ChangelogTable;
