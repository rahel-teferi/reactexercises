import "./Card.css";
//export const Card = (props) => {
export const Card = ({ title, content, children, onShowMore, ui }) => {
  return (
    <section className="card" style={ui}>
      {/* <h2>{props.title}</h2>
      <p>{props.content}</p> */}

      {/* <h2>{title}</h2>
      <p>{content}</p> */}
      {children}
      {/* <p>
        <button type="button" onClick={() => alert(title)}>
          show more
        </button> */}
      {/* or we can create a function and call that function on the onClick */}
      {/* </p> */}
      <p>
        <button type="button" onClick={() => onShowMore(title)}>
          show more
        </button>
      </p>
    </section>
  );
};
