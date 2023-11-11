import mapleLeaf from "../assets/maple_leaf.jpg";
import "../styles/main-component.css";
function MainContent() {
  return (
    <>
      <main className="main-content">
        <div className="image-box">
          <img className="main-image" src={mapleLeaf} alt="maple leaf" />
        </div>
        <div className="content">
          <p>
            One of the most mesmerizing aspects of fall is undoubtedly the
            kaleidoscope of colors that paint the landscape. Trees shed their
            green summer attire and don a spectacular array of reds, oranges,
            yellows, and browns. The once-lush canopies transform into a
            breathtaking tapestry, creating a scenic masterpiece that beckons
            admiration and reflection.As the vibrant hues of summer gradually
            give way to the warm and earthy tones of autumn.
          </p>
        </div>
        <div className="small-box-1"></div>
        <div className="small-box-2"></div>
      </main>
    </>
  );
}

export default MainContent;
