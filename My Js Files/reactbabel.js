const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const Header = () => {
  return (
    <header className="header">
      <article className="header_wrapper">
        <h1>
          Eflex<span>Code</span>
        </h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="button_wrapper">
          <Button text="Get Started" />
          <Button text="Login" />
        </div>
      </article>
    </header>
  );
};

const UserInput = () => {
  const HandleBtnClick = () => {
    const FullName = document.getElementById("FullName").value
    const Quote = document.getElementById("quote").value

    let AllInfor = JSON.parse(localStorage.getItem("AllData")) || [];

    if (!FullName || !Quote) {
      alert("Please enter your name and quote");
      return;
    }

    const Initialletters = FullName.split(" ").map((e) => e[0]).join("").slice(0, 2).toUpperCase();

    const colors = ["blue", "white", "grey", "black", "yellow", "green", "gold", "pink"];

   const color = colors[Math.floor(Math.random() * colors.length)];

    const user = {
      name: FullName,
      userQuote: Quote,
      initials: Initialletters,
      color: color,
      date:  new Date().toLocaleDateString()
    };

    
    AllInfor.push(user);
    localStorage.setItem("AllData", JSON.stringify(AllInfor));

    document.getElementById("FullName").value = "";
    document.getElementById("quote").value = "";

    displayQuotes();
  };

  return (
    <section className="section">
      <article className="section_wrapper">
        <input type="text" placeholder="Enter your Full Name" id="FullName" />
        <textarea placeholder="Enter your Quote" id="quote"></textarea>
        <Button onClick={HandleBtnClick} className="quote_btn" text="Add Quote" />
      </article>
    </section>
  );
};

const PostCard = () => {
  return (
    <div className="post_card">
      <article className="post_card_wrapper" id="post_container"></article>
    </div>
  );
};

const MyApp = () => {
  return (
    <>
      <Header />
      <UserInput />
      <PostCard />
    </>
  );
};

const displayQuotes = () => {
  const postContainer = document.getElementById("post_container");
  const AllInfor = JSON.parse(localStorage.getItem("AllData")) || [];

  const allPosts = AllInfor
    .map((user, index) => { 
      
      return `
        <div class="Card">
          <div class="prof_del_btn">
            <p id="Profile" style="background:${user.color};">${user.initials}</p>
            <button class="delete_btn" onClick="deletePost(${index})">X</button>
          </div>
          <h4 id="name">${user.name}</h4>
          <div class="contents" id="content">${user.userQuote}</div>
          <div class="footer">
            <footer>${user.date}</footer>
          </div>
        </div>
      `
    })
    .join("");  

  postContainer.innerHTML = allPosts;


}

  const deletePost =(index) => {
  const AllInfor = JSON.parse(localStorage.getItem("AllData")) || [];
  AllInfor.splice(index, 1);
  localStorage.setItem("AllData", JSON.stringify(AllInfor));
  displayQuotes(); 
}





const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
