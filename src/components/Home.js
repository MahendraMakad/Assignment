import React from "react";
import './combine.css';

const home = () => {
    return (
        <div className="home">
            <h1>Personal Details</h1>
            <div className="details">
                <table>
                    <tr>
                        <th>Attribute</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Mahendra</td>
                    </tr>
                    <tr>
                        <td>Degree</td>
                        <td>B.Tech(CSE)</td>
                    </tr>
                    <tr>
                        <td>College</td>
                        <td>NIT Kurukshetra</td>
                    </tr>
                    <tr>
                        <td>Passing Year</td>
                        <td>June 2024</td>
                    </tr>
                    <tr>
                        <td>Technologies</td>
                        <td>React, Node, HTML, CSS, JavaScript</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>C++, Python</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default home;