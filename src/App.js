
import './App.css';


export default function App() {
  //props
  return (
    <div className="App">
      <div className="container">
        <Card
          title1="FREE"
          price="$0"
          Duration="/month"
          list1="✔ Single User"
          list2="✔ 5GB Storage"
          list3="✔ Unlimited Public Projects"
          list4="✔ Community Access"
          list5="✖ Unlimited Private Projects"
          list6="✖ Dedicated Phone Support"
          list7="✖ Free Subdomain"
          list8="✖ Monthly Status Reports"
        />

        <Card
          title1="PLUS"
          price="$9"
          Duration="/month"
          list1="✔ 5 Users"
          list2="✔ 50GB Storage"
          list3="✔ Unlimited Public Projects"
          list4="✔ Community Access"
          list5="✔ Unlimited Private Projects"
          list6="✔ Dedicated Phone Support"
          list7="✔ Free Subdomain"
          list8="✖ Monthly Status Reports"
        />

        <Card
          title1="PRO"
          price="$49"
          Duration="/month"
          list1="✔  Unlimited Users"
          list2="✔  150GB Storage"
          list3="✔  Unlimited Public Projects"
          list4="✔  Community Access"
          list5="✔  Unlimited Private Projects"
          list6="✔ Dedicated Phone Support"
          list7="✔ Unlimited Free Subdomains"
          list8="✔ Monthly Status Reports"
        />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <h6 className="title1">{props.title1}</h6>
      <h4 className="title2">
        {props.price}
        <span>{props.Duration}</span>
      </h4>
      <hr />
      <ul className="list">
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
        <li>{props.list5}</li>
        <li>{props.list6}</li>
        <li>{props.list7}</li>
        <li>{props.list8}</li>
      </ul>
      <button className="button">BUTTON</button>
    </div>
  );
}

var c = document.getElementsByTagName('li');
for(var i of c){
  if(i.innerText.includes('✖')) {
    i.style.opacity ='.3';
  }
}