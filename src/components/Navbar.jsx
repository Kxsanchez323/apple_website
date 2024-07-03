
const Navbar = () => {
  return (
    <header>
    <nav>
        <img src={appleImg} alt='Apple' width={14} height={18}/>

        <div>
            {['Phones', 'Macbooks', 'Tablets',].map((nav) => (
                <div key={nav}>
                    {nav}
                </div>
            ))}
        </div>

        <div>
            <img />
        </div>
    </nav>
</header>
  )
}

export default Navbar