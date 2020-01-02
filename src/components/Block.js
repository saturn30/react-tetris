import React from "react"

const Block = props => {
  return <div style={blockStyle(props.color)}></div>
}

const blockStyle = index => {
  if (index === "border none") {
    return {
      width: 30,
      height: 30,
      backgroundColor: 'white',
      display: "inline-block"
    }
  }
  const color = [
    "white",
    "silver",
    "#65387d",
    "#f19670",
    "#e9d78e",
    "#e0598b",
    "#5698c4",
    "#9abf88"
  ]
  return {
    width: 30,
    height: 30,
    backgroundColor: color[index],
    display: "inline-block",
    boxShadow:
      "2px 0 0 #DCDCDC, 2px 2px 0 0 #DCDCDC, 2px 0 0 0 #DCDCDC inset, 0 2px 0 0 #DCDCDC inset"
  }
}

export default Block
