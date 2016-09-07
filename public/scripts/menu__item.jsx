import React, { PropTypes } from "react";

export default class menu__item extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.scroll = false;
    this.dragIndex = 0;
  }

  componentDidMount() {
    this.scrollThreshhold = this.li.getElementsByClassName("drag-btn")[0].offsetHeight * 0.7;
    this.li.addEventListener("touchend", this.onTouchEnd, false);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  onTouchEnd() {
    if (this.scroll) {
      if (this.li.scrollLeft > this.scrollThreshhold) {
        this.props.drag();
      }

      this.li.scrollLeft = 0;
      this.scroll = false;
    }
  }

  onScroll() {
    this.scroll = true;
    if (this.li.scrollLeft > this.scrollThreshhold) {
      this.dragBtn.className = `drag-btn ${this.props.dragClass[1]}`;
    } else {
      this.dragBtn.className = `drag-btn ${this.props.dragClass[0]}`;
    }
  }

  render() {
    return (
      <li
        onClick = {this.props.click}
        ref = {e=> {
          this.li = e;
        }}

        className = {"menu__item"}
        onClick = {this.props.click}
        onScroll = {this.onScroll}
      >
        <div
          className = {"text"}
        >
          <text >
            {this.props.text}
          </text>
        </div>
        <div
          ref = {e=> {
            this.dragBtn = e;
          }}

          className = {`drag-btn ${this.props.dragClass[this.dragIndex]}`}
        >
          <this.props.svg />
        </div>
      </li>
    );
  }
}

menu__item.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  drag: PropTypes.func.isRequired,
  svg: PropTypes.func.isRequired,
  dragClass: PropTypes.array.isRequired
};
