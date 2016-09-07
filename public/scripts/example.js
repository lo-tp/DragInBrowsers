var MenuItem = React.createClass({
  componentDidMount:function(){
    this.scrollThreshhold = this.li.getElementsByClassName("drag-btn")[0].offsetHeight * 0.7;
    this.li.addEventListener("touchend", this.onTouchEnd, false);
  },
  shouldComponentUpdate:function(nextProps) {
    return nextProps !== this.props;
  },

  onTouchEnd:function() {
    if (this.scroll) {
      if (this.li.scrollLeft > this.scrollThreshhold) {
        this.props.drag.bind(this)();
      }

      this.li.scrollLeft = 0;
      this.scroll = false;
    }
  },

  onScroll:function() {
    this.scroll = true;
    if (this.li.scrollLeft > this.scrollThreshhold) {
      this.dragBtn.className = `drag-btn ${this.props.dragClass[1]}`;
    } else {
      this.dragBtn.className = `drag-btn ${this.props.dragClass[0]}`;
    }
  },

  render:function() {
    return (
      <li
        onClick = {this.props.click.bind(this)}
        ref = {e=> {
          this.li = e;
        }}

        className = {"menu__item"}
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

          className = {`drag-btn ${this.props.dragClass[0]}`}
        >
          <text>
            drag
          </text>
        </div>
      </li>
    );
  }


});
function clickHandler(){
  console.log(this.props.text);
}
function dragHandler(){
  alert(`drag ${this.props.text}`);
}
var Menu=React.createClass({
  render:function(){
    return(
      <ul>
        <MenuItem
          click = {clickHandler}
          text = {"first"}
          drag = {dragHandler}
          dragClass = {["drag-btn_initial","drag-btn_green"]}
        />
        <MenuItem
          click = {clickHandler}
          text = {"second"}
          drag = {dragHandler}
          dragClass = {["drag-btn_initial","drag-btn_green"]}
        />
        <MenuItem
          click = {clickHandler}
          text = {"third"}
          drag = {dragHandler}
          dragClass = {["drag-btn_initial","drag-btn_green"]}
        />
      </ul>
    );
  }
});

ReactDOM.render(
  <Menu />,
  document.getElementById('content')
);
