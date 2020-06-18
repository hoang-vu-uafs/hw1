import React from "react";
import faker from "faker";

import Image from "./SubComponents/Image";
import Description from "./SubComponents/Description";

function Card() {
  return (
    <div className="ui card">
      <Image source={faker.image.image()} />
      <Description
        name={faker.name.findName()}
        date={faker.date.past()}
        description={faker.lorem.sentence()}
      />
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  );
}

export default Card;
