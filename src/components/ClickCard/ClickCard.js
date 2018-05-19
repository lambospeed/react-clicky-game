import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCard(props.breed)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default ClickCard;
