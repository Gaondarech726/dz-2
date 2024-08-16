import React, { useState } from "react";
export function AppColorsArray() {
  const [vissibleDialogId, setVissibleDialogId] = useState(-1);

  const colors1 = ["plum", "mulberry", "french rose"];
  const colors2 = ["chili", "amaranth", "taffy"];


  const colorsArray = [
    {
      name: "plum",
      code: "#845ec2",
      about:
        "Plum is a purple color with a brownish-gray tinge, like that shown on the right, or a reddish purple, which is a close representation of the average color of the plum fruit. As a quaternary color on the RYB color wheel, plum is an equal mix of the tertiary colors russet and slate. The first recorded use of plum as a color name in English was in 1805.",
    },
    {
      name: "mulberry",
      code: "#d65db1",
      about:
        "The color mulberry is displayed on the right. This color is a representation of the color of mulberry jam or pie. This was a Crayola crayon color from 1958 to 2003. The first recorded use of mulberry as a color name in English was in 1776.",
    },
    {
      name: "french_rose",
      code: "#ff6f91",
      about:
        "The first recorded use of rose as a color name in English was in 1382.[2] The etymology of the color name rose is the same as that of the name of the rose flower. The name originates from Latin rosa, borrowed through Oscan from colonial Greek in southern Italy: rhodon (Aeolic form: wrodon), from Aramaic wurrdā, from Assyrian wurtinnu, from Old Iranian *warda (cf. Avestan warda, Sogdian ward, Parthian wâr).",
    },
    {
      name: "chili",
      code: "#c21807",
      about:
        "Chili red is a bold shade associated with feelings of excitement and passion. It's positioned between red and orange on the color wheel, leaning more closely towards red. Though the majority of this shade lies in the red spectrum, the hint of orange hue gives this shade a warmer appearance. The color chili red comes from the color of the spicy peppers, which originated in South America and were first cultivated in Mexico nearly 8,000 years ago.",
    },
    {
      name: "amaranth",
      code: "#e83256",
      about:
        "Amaranth is a cool-toned shade between red and violet on the color wheel. Named after the amaranth flower, it balances the passion and energy of red with the luxury and creativity associated with purple. Inspired by the vibrant amaranth flower, the color amaranth symbolizes immortality and eternal love. Many cultures use amaranth to decorate wreaths and memorials, expressing enduring affection and remembrance.",
    },
    {
      name: "taffy",
      code: "#f987c5",
      about:
        "This particular shade of pink translates to a light pink with a very slight orange undertone—some might call it a light coral. On the color wheel, it sits closer to the pink section but with a subtle shift towards orange. This subtle blend of warmth from the orange with the softness of pink creates a vibrant yet soothing feel. Taffy often symbolizes love, romance, and a sense of playfulness. Rooted in red, it carries an understated vibrancy and can evoke feelings of youth and joy.",
    },
  ];
  return (
    <ul>
      {colors1.map((color, index) => (
        <li
          key={index}
          className={`color-${color.replace(/\s+/g, "-")}`}
          onClick={() => setVissibleDialogId(index)}
        >
          {color}
        </li>
      ))}
      {colors2.map((color, index) => (
        <li
          key={index}
          className={`color-${color.replace(/\s+/g, "-")}`}
        >
          {color}
        </li>
      ))}
      {colorsArray.map((color, index) => (
        <li
          key={index}
          style={{ display: index === vissibleDialogId ? "block" : "none" }}
        >
          <div className="colorDescription">
            <h4 className="colorName">{color.name}</h4>
            <div
              className="paleteColor"
              style={{
                backgroundColor: color.code,
                width: "50px",
                height: "50px",
                borderRadius: "4px",
              }}
            ></div>
            <p className="pColor">{color.about}</p>
            <h1 className="colorCode">{color.code}</h1>
          </div>
        </li>
      ))}
    </ul>
    
  );
}
