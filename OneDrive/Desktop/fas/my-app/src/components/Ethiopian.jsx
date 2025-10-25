function Ethiopian(props) {
  return (
    <article className="container">
      <img className="main-images" src={props.img1.src} alt={props.img1.alt} />
      <div className="div-com">
        <div className="country-info">
          <img className="sub-image" src={props.img2.src} alt={props.img2.alt} />
          <span>{props.country}</span>
        </div>
        <a
          className="a-tag"
          href={props.googleMapLink}
        >
          View the location
        </a>
        <h2 className="sub-h2">{props.heading}</h2>
        <p className="main-p">{props.text1}</p>
        <p className="sub-p">{props.text2}</p>
      </div>
    </article>
  );
}

export default Ethiopian;
