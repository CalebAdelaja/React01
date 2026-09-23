# PROPS
# Understanding the concept of PROPS
Props are information or data that one component gives to anithe component, mostly the parent component is the onw that passed data to the  child component so the data that is being passed s called PROPS

# Why do we even need Props?
Remember something important about React components. Components are separate pieces of UI. 

For example, you might have:
App
│
├── Navbar
├── Profile
├── Product
└── Footer

Now imagine your Profile component needs to display someone's name. 
Maybe you have: `name = "Caleb"`

Where should Profile get that information? The App component can give it to Profile through props.

Props are like a package
Think of props as a package being delivered, the parent prepares the package:
`name: Caleb`
`age: 20`
`country: Nigeria` 
Then sends it to the child, the child receives the package and can look inside it.

And the package can contain different types of information:
strings
numbers
booleans
arrays
objects
functions
even other React components

Now let's look at very small code
Suppose we have a parent component:
`function App() {`
  `return <Profile name="Caleb" />;`
`}`
And this is the child component: But How does Profile receive that name That's where props comes in.

`function Profile(props) {`
 ` return <h1>Hello {props.name}</h1>;`
`}`
The important part is: `props` React gives the child component an object containing the information the parent passed.

You can mentally imagine React giving Profile something like: \
`props = {`
  `name: "Caleb"`
`}` 
So when you write: `props.name` 
you're basically saying: Go inside the props object and give me the value of name 

The parent says: `<Profile name="Caleb" />` It's basically means:
Profile, I'm giving you a piece of information called name, and its value is Caleb. Then Profile receives that information through props.



One thing you should NOT confuse Props are not the same thing as variables.
`const name = "caleb" ` this is a javascript variable. But
`<Profile name="Caleb" />` This is means Pass this information to the Profile component.

# So multiple props can be passed
The parent could do:
function App() {
  return (
    <Profile
      name="Caleb"
      age={20}
      country="Nigeria"
    />
  );
}

Now imagine the child receives:

`props = {`
  `name: "Caleb",`
  `age: 20,`
  `country: "Nigeria"`
`}`  Therefore:
`props.name` will be `Caleb`
`props.age` will be `20`
`props.country` will be `Nigeria`

So the child component could use this like this:

function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.country}</p>
    </div>
  );
}