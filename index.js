const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div className="card-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button_container">
        <Button buttonText="Like" className="like" />
        <Button buttonText="Comment" className="comment" />
        <Button buttonText="Share" className="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
