function Footer() {
  return (
    <footer className="bg-blue-500 text-black py-10 mt-10">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-30">
        
        {/* Left Section */}
        <div>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae maxime fugit aspernatur vero adipisci ut. Laborum voluptate distinctio 
            incidunt architecto laudantium asperiores ab cupiditate in hic doloribus vitae.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque aliquam enim, impedit recusandae laudantium aspernatur, 
            possimus libero architecto officia nesciunt quod velit esse neque blanditiis quaerat.
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer