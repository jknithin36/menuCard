import MenuData from "./data";

function App() {
  return (
    <div className="bg-amber-50 font-primary min-h-screen">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="py-8">
      <h1 className="text-4xl text-center text-amber-900">⫷ TastyTravels ⫸</h1>
      <p className="text-base text-center text-amber-800">
        - Taste the World 🌍, One Bite at a Time 🍽️ -
      </p>
    </header>
  );
}

function Menu() {
  return (
    <div className="container mx-auto">
      <div className="border-solid border-3 rounded border-black-700 m-2 p-4">
        <h2 className="text-xl text-center mb-4">
          🍗 Select What you to Bite 🍗
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {MenuData.map((item) => (
            <div
              key={item.name}
              className="border-solid border border-gray-300 rounded p-2 flex"
            >
              <img
                className="h-32 w-32 object-cover mr-2"
                src={item.image}
                alt={item.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mb-1 text-sm">{item.ingredients}</p>
                <p className="text-green-700 font-semibold text-sm">
                  {item.price} <span className="text-gray-500">$</span>
                </p>
                <button className="border-solid border border-gray-300 rounded-lg py-2 px-4 text-blue-500 hover:text-blue-700 hover:border-blue-700">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-4">
      <p className="text-center text-sm">
        TastyTravels@food - All rights reserved
      </p>
    </footer>
  );
}

export default App;
