const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink"
  }
};
const person1 = {
  name: "Ratan tata",
  theme: {
    backgroundColor: "black",
    color: "pink"
  }
};

export default function TodoList() {
  return (
    <>
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />

        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>

      <div style={person1.theme}>
        <h1>{person1.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://th.bing.com/th/id/OIP.sDnO9i2-0BR8nAur0iMT4wAAAA?pid=ImgDet&rs=1"
          alt="RATAN TATA"
        />

        <ul>
          <li>
            Ratan Naval Tata (born 28 December 1937) is an Indian industrialist.
          </li>
          <li> philanthropist and former chairman of Tata Sons</li>
          <li>
            He was chairman of the Tata Group from 1990 to 2012, and interim
            chairman from October 2016 through February 2017.
          </li>
        </ul>
      </div>
    </>
  );
}
