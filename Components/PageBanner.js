export default function PageBanner(props) {
  const nameEnglish = props.nameEnglish;
  const namePersian = props.namePersian;
  return (
    <div className="pageBanner">

      <div className="text">
        <h1 className="english">{nameEnglish}</h1>
        <h4 className="persian">{namePersian}</h4>
      </div>
    </div>
  );
}
