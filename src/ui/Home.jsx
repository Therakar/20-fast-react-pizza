function Home() {
    return (
        <div>
            {/* use text-['value in px or rem'] if you want to personalize the result more*/}
            <h1 className="text-center text-xl font-semibold ">
                The best pizza.
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
        </div>
    )
}

export default Home
