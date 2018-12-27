import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import { Card, Label, Statistic } from "semantic-ui-react";

import { weightClassToTag } from "../helpers";

export default function CharacterItem({
  name,
  slug,
  image,
  attributes: {
    weight: { class: weightClass }
  },
  killConfirms,
  combos
}) {
  return (
    <Card>
      <Image fluid={image.childImageSharp.fluid} />
      <Card.Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card.Header
          style={{
            textTransform: "uppercase"
          }}
        >
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
        extra
      >
        <Statistic>
          <Statistic.Label>Kill Confirms</Statistic.Label>
          <Statistic.Value>{killConfirms.length}</Statistic.Value>
        </Statistic>
        <Statistic>
          <Statistic.Label>Combos</Statistic.Label>
          <Statistic.Value>{combos.length}</Statistic.Value>
        </Statistic>
      </Card.Content>
      <Card.Content extra>
        <Label tag>{weightClassToTag[weightClass]}</Label>
      </Card.Content>
    </Card>
  );
}
