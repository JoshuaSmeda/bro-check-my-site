//export default function LandingPage() {
//	return <h1> Landing Page </h1>
//}

function LandingPage({ users }) {
  return (
    <div>
	  <h1> All Users </h1>
	  {users.map(user => (
	    <div key={user.id}>
	      <a>
		    <h3>{ user.name }</h3>
		  </a>
	    </div>
	  ))}
	  </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()

  return {
    props: { users: posts }
  }
}

export default LandingPage
